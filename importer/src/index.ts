require('dotenv').config()
import {
  equals,
  filter,
  identity,
  indexBy,
  map,
  mergeDeepRight,
  path,
  pipe,
  prop,
  reject,
  uniq,
  uniqBy,
} from 'ramda'
import readCsv, {
  CsvRecord,
  EncounterRecord,
  HexRecord,
  RumourRecord,
} from './csv'
import {
  get,
  put,
  delet3,
  postMany,
  authenticate,
  StrapiEntity,
  StrapiResponse,
  Region,
} from './api'

const insert = async <T extends CsvRecord>(
  entityType: string,
  records: T[],
  mapping: (x: T) => unknown = identity,
  index: string
): Promise<EntityLookup> => {
  const entities = pipe(
    map(mapping),
    uniqBy(JSON.stringify),
    reject(pipe(prop(index), equals('')))
  )(records)

  const responses = await postMany(entityType, entities)
  console.log(`Inserted ${responses.length} ${entityType}`)
  return indexBy<StrapiEntity, string>(
    path(['attributes', index]) as (foo: StrapiEntity) => string,
    responses
  ) as EntityLookup
}

const wipe = async (entityType: string): Promise<StrapiResponse[]> => {
  console.log(`Wiping ${entityType}`)
  const entities = await get(entityType)
  return Promise.all(
    (entities.data.data as unknown as any[]).map((e) =>
      delet3(entityType, e.id)
    )
  )
}

type EntityLookup = { [key: string]: StrapiEntity }

const insertRegions = async (records: HexRecord[]) =>
  insert('regions', records, ({ Region }) => ({ name: Region }), 'name')

const insertAdventures = async (records: HexRecord[]) =>
  insert(
    'adventures',
    records,
    ({ Adventure, Level, Link }) => ({
      name: Adventure,
      level: Level,
      link: Link,
    }),
    'name'
  )

const insertSettlements = async (records: HexRecord[]) =>
  insert(
    'settlements',
    records,
    ({ Settlement }) => ({ name: Settlement }),
    'name'
  )

const insertHexes = async (
  records: HexRecord[],
  adventures: EntityLookup,
  regions: EntityLookup,
  settlements: EntityLookup
) =>
  insert(
    'hexes',
    records,
    ({ Index, Region, Settlement, Adventure, Landmark, Hidden, Secret }) => ({
      reference: Index,
      landmark: Landmark,
      hidden: Hidden,
      secret: Secret,
      region: regions[Region]?.id,
      settlement: settlements[Settlement]?.id,
      adventure: adventures[Adventure]?.id,
    }),
    'reference'
  )

const processHexSheet = async (
  filename: string
): Promise<{
  adventures: EntityLookup
  hexes: EntityLookup
  regions: EntityLookup
  settlements: EntityLookup
}> => {
  const records = await readCsv<HexRecord>(filename)
  const adventures = await insertAdventures(records)
  const regions = await insertRegions(records)
  const settlements = await insertSettlements(records)
  const hexes = await insertHexes(records, adventures, regions, settlements)

  return {
    adventures,
    regions,
    settlements,
    hexes,
  }
}

const insertEncounters = async (records: EncounterRecord[]) =>
  insert(
    'encounters',
    records,
    ({ Roll, Encounter }) => ({ roll: Roll, description: Encounter }),
    'roll'
  )

const insertRumours = async (records: RumourRecord[]) =>
  insert(
    'rumours',
    records,
    ({ Roll, Rumour }) => ({ roll: Roll, text: Rumour, done: false }),
    'roll'
  )

const processEncounterSheet = async (
  records: EncounterRecord[],
  region: StrapiEntity
) => {
  const encounters = await insertEncounters(records)
  const entity = mergeDeepRight(region, {
    attributes: {
      encounters: map(prop('id'), Object.values(encounters)),
    },
  })
  return put('regions', entity)
}

const processRumourSheet = async (
  records: RumourRecord[],
  adventure: StrapiEntity
) => {
  const encounters = await insertRumours(records)
  const entity = mergeDeepRight(adventure, {
    attributes: {
      rumours: map(prop('id'), Object.values(encounters)),
    },
  })
  return put('adventures', entity)
}

const processNested = async <T extends CsvRecord>(
  filename: string,
  column: keyof T,
  lookup: EntityLookup,
  processor: (records: T[], parent: StrapiEntity) => Promise<StrapiResponse>
) => {
  const records = (await readCsv(filename)) as T[]
  const uniqueParents = pipe(
    map(prop(column) as (x: T) => string),
    uniq
  )(records) as string[]

  return Promise.all(
    map((parent) => {
      const isCurrent = (x: T) => equals(prop(column, x) as string, parent)
      return processor(filter(isCurrent, records), lookup[parent])
    }, uniqueParents)
  )
}

const processEncounters = async (filename: string, regions: EntityLookup) => {
  console.log('Inserting encounters')
  return processNested(filename, 'Region', regions, processEncounterSheet)
}

const processRumours = async (filename: string, adventures: EntityLookup) => {
  console.log('Inserting adventures')
  return processNested(filename, 'Adventure', adventures, processRumourSheet)
}

;(async () => {
  await authenticate()

  await wipe('encounters')
  await wipe('rumours')
  await wipe('regions')
  await wipe('adventures')
  await wipe('settlements')
  await wipe('hexes')
  console.log('Done')

  const lookups = await processHexSheet('test.csv')
  await processEncounters('encounters.csv', lookups.regions)
  await processRumours('rumours.csv', lookups.adventures)
  console.log('Done')
})()
