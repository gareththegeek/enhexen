require('dotenv').config()
import {
  equals,
  filter,
  find,
  identity,
  indexBy,
  innerJoin,
  isNil,
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
  AssetRecord,
  CsvRecord,
  EncounterRecord,
  FactionRecord,
  HexRecord,
  NpcRecord,
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
      done: false,
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

const insertDomains = async (records: HexRecord[], factions: EntityLookup) =>
  insert(
    'domains',
    records,
    ({ Domain, Faction }) => ({
      name: Domain,
      faction: Faction ? factions[Faction].id : undefined,
    }),
    'name'
  )

const insertHexes = async (
  records: HexRecord[],
  adventures: EntityLookup,
  regions: EntityLookup,
  settlements: EntityLookup,
  domains: EntityLookup
) =>
  insert(
    'hexes',
    records,
    ({
      Index,
      Region,
      Settlement,
      Adventure,
      Landmark,
      Hidden,
      Secret,
      Domain,
    }) => ({
      reference: Index,
      landmark: Landmark,
      hidden: Hidden,
      secret: Secret,
      landmarkRevealed: false,
      hiddenRevealed: false,
      secretRevealed: false,
      region: regions[Region]?.id,
      settlement: settlements[Settlement]?.id,
      adventure: adventures[Adventure]?.id,
      domain: domains[Domain]?.id,
    }),
    'reference'
  )

// const createMapAdventureHexId =
//   (adventures: EntityLookup, hexes: EntityLookup) =>
//   (record: HexRecord): StrapiEntity | undefined => {
//     const match = find(
//       (entity: StrapiEntity) => record.Adventure === entity.attributes.name,
//       Object.values(adventures)
//     )
//     if (!match) {
//       return undefined
//     }
//     return mergeDeepRight(match, { attributes: { hex: hexes[record.Index].id } })
//   }

// const updateAdventureHexes = async (
//   adventures: EntityLookup,
//   records: HexRecord[],
//   hexes: EntityLookup
// ) => {
//   const mapAdventureHexId = createMapAdventureHexId(adventures, hexes)
//   const entities = pipe(map(mapAdventureHexId), reject(isNil))(records) as StrapiEntity[]
//   for (const entity of entities) {
//     await put('adventures', entity)
//   }
// }

const processHexSheet = async (
  filename: string,
  factions: EntityLookup
): Promise<{
  adventures: EntityLookup
  domains: EntityLookup
  hexes: EntityLookup
  regions: EntityLookup
  settlements: EntityLookup
}> => {
  const records = await readCsv<HexRecord>(filename)
  const adventures = await insertAdventures(records)
  const regions = await insertRegions(records)
  const settlements = await insertSettlements(records)
  const domains = await insertDomains(records, factions)
  const hexes = await insertHexes(
    records,
    adventures,
    regions,
    settlements,
    domains
  )

  //await updateAdventureHexes(adventures, records, hexes)

  return {
    adventures,
    domains,
    regions,
    settlements,
    hexes,
  }
}

const insertEncounters = async (records: EncounterRecord[], regionId: number) =>
  insert(
    'encounters',
    records,
    ({ Roll, Encounter }) => ({ roll: Roll, description: Encounter, region: regionId }),
    'roll'
  )

const insertRumours = async (records: RumourRecord[], adventureId: number) =>
  insert(
    'rumours',
    records,
    ({ Roll, Rumour }) => ({
      roll: Roll,
      text: Rumour,
      done: false,
      adventure: adventureId,
    }),
    'roll'
  )

const insertAssets = async (
  records: AssetRecord[],
  factionId: number,
  hexes: EntityLookup
) =>
  insert(
    'assets',
    records,
    ({ Type, Reference, HP, Max, Attack, Counter, Qualities }) => ({
      name: Type,
      hp: HP,
      maxHp: Max,
      attack: Attack,
      counter: Counter,
      qualities: Qualities,
      faction: factionId,
      hex: hexes[Reference]?.id,
    }),
    'type'
  )

const insertNpcs = async (
  records: NpcRecord[],
  factionId: number,
  hexes: EntityLookup
) =>
  insert(
    'npcs',
    records,
    ({
      Name,
      Position,
      'Source of Power': SourceOfPower,
      Residence,
      Reference,
    }) => ({
      name: Name,
      position: Position,
      sourceOfPower: SourceOfPower,
      residence: Residence,
      faction: factionId,
      hex: hexes[Reference]?.id,
    }),
    'name'
  )

const processEncounterSheet = async (
  records: EncounterRecord[],
  region: StrapiEntity
) => {
  const encounters = await insertEncounters(records, region.id)
  return mergeDeepRight(region, {
    attributes: {
      encounters: map(prop('id'), Object.values(encounters)),
    },
  })
}

const processRumourSheet = async (
  records: RumourRecord[],
  adventure: StrapiEntity
) => {
  const rumours = await insertRumours(records, adventure.id)
  return mergeDeepRight(adventure, {
    attributes: {
      rumours: map(prop('id'), Object.values(rumours)),
    },
  })
}

const processAssetSheet = async (
  records: AssetRecord[],
  faction: StrapiEntity,
  hexes: EntityLookup
) => {
  const assets = await insertAssets(records, faction.id, hexes)
  return mergeDeepRight(faction, {
    attributes: {
      assets: map(prop('id'), Object.values(assets)),
    },
  })
}

const processNpcSheet = async (
  records: NpcRecord[],
  faction: StrapiEntity,
  hexes: EntityLookup
) => {
  const npcs = await insertNpcs(records, faction.id, hexes)
  return mergeDeepRight(faction, {
    attributes: {
      npcs: map(prop('id'), Object.values(npcs)),
    },
  })
}

const processNested = async <T extends CsvRecord>(
  filename: string,
  column: keyof T,
  lookup: EntityLookup,
  processor: (records: T[], parent: StrapiEntity) => Promise<StrapiEntity>
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

const processFactions = async (filename: string): Promise<EntityLookup> => {
  console.log('Inserting factions')
  const records: FactionRecord[] = await readCsv(filename)
  return insert(
    'factions',
    records,
    ({
      Faction,
      Description,
      Cunning,
      Force,
      Wealth,
      Income,
      Magic,
      Treasure,
      HitPoints,
      Theme,
      'Internal Conflict': InternalConflict,
      'External Conflict': ExternalConflict,
      Tags,
    }) => ({
      name: Faction,
      description: Description,
      cunning: Cunning,
      force: Force,
      wealth: Wealth,
      income: Income,
      magic: Magic,
      treasure: Treasure,
      hitPoints: HitPoints,
      maxHitPoints: HitPoints,
      theme: Theme,
      internalConflict: InternalConflict,
      externalConflict: ExternalConflict,
      tags: Tags,
    }),
    'name'
  )
}

const processAssets = async (
  filename: string,
  factions: EntityLookup,
  hexes: EntityLookup
) => {
  console.log('Inserting assets')
  return processNested(
    filename,
    'Faction',
    factions,
    async (records: AssetRecord[], parent) =>
      processAssetSheet(records, parent, hexes)
  )
}

const processNpcs = async (
  filename: string,
  factions: EntityLookup,
  hexes: EntityLookup
) => {
  console.log('Inserting NPCs')
  return processNested(
    filename,
    'Faction',
    factions,
    async (records: NpcRecord[], parent) => processNpcSheet(records, parent, hexes)
  )
}

;(async () => {
  await authenticate()

  await wipe('assets')
  await wipe('domains')
  await wipe('npcs')
  await wipe('factions')
  await wipe('encounters')
  await wipe('rumours')
  await wipe('regions')
  await wipe('adventures')
  await wipe('settlements')
  await wipe('hexes')
  console.log('Done')

  const factions = await processFactions('factions.csv')
  const lookups = await processHexSheet('test.csv', factions)
  const assets = await processAssets('assets.csv', factions, lookups.hexes)
  await processEncounters('encounters.csv', lookups.regions)
  await processRumours('rumours.csv', lookups.adventures)
  await processNpcs('npcs.csv', factions, lookups.hexes)
  console.log('Done')
})()
