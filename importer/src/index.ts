require('dotenv').config()
import axios from 'axios'
import fs from 'fs'
import csvParser from 'csv-parser'

const encounterTables: [any, any][] = [
    ['Flutewood', 'flutewood.csv']
]

interface EncounterRecord {
    Roll: string
    Encounter: string
}

interface HexRecord {
    Index: string
    Region: string
    Landmark: string
    Hidden: string
    Secret: string
    Adventure: string
    Level: string
    Link: string
}

interface Hex {
    id: number
    reference: string
    region: number
    domain?: number
    adventure?: number
    landmark: string
    hidden: string
    secret: string
}

interface Region {
    id: number
    name: string
}

interface Adventure {
    id: number
    name: string
    level: string
    hyperlink: string
}

interface StrapiResponse {
    data: {
        data: {
            id: number
            attributes: Record<string, string | number | boolean | { data: StrapiResponse[] }>
        }
    }
}

const FILENAME = 'test.csv'
const BASE = process.env.API_BASE ?? 'http://127.0.0.1:1337/api'

let user: string
let jwt: string

const getHeaders = () => ({
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

const get = (entityType: string): Promise<StrapiResponse> =>
    axios.get(
        `${BASE}/${entityType}?pagination[pageSize]=10000`,
        getHeaders())

const post = <T>(entityType: string, entity: T): Promise<StrapiResponse> =>
    axios.post(
        `${BASE}/${entityType}`,
        entity,
        getHeaders())
    
const delet3 = (entityType: string, id: string): Promise<void> => {
    return axios.delete(
        `${BASE}/${entityType}/${id}`,
        getHeaders())
    }

const wipe = async (entityType: string): Promise<void[]> => {
    console.log(`Wiping ${entityType}`)
    const entities = await get(entityType)
    return Promise.all((entities.data.data as unknown as any[]).map(e => delet3(entityType, e.id)))
}

const encounters: {[key: string]: number[]} = {}

const readCsv = <T>(filename: string): Promise<T[]> =>
    new Promise((resolve) => {
        const result: T[] = []
        fs.createReadStream(filename)
            .pipe(csvParser())
            .on('data', data => {
                result.push(data as T)
            })
            .on('end', () => {
                resolve(result)
            })
    })

const delay = async (period: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), period))

const insertAllTheThings = async (entityType: string, records: any[], mapper = (y: any) => ({data:y})): Promise<StrapiResponse[]> => {
    const responses: StrapiResponse[] = []
    for(const x of records) {
        // Apparently if I go too quickly strapi breaks
        delay(800)
        responses.push(await post(entityType, mapper(x)))
    }
    return responses
}

const importEncounterTable = async ([key, csv]: [string, string]): Promise<void> => {
    const encountersFromCsv = await readCsv<EncounterRecord>(csv)
    const encounterResponses = await insertAllTheThings('encounters', encountersFromCsv)
    encounters[key] = encounterResponses.map(x => x.data.data.id)
    console.log(encounters)
}

const importEncounters = async () => { 
    console.log("Importing Encounter Tables")
    for (const x of encounterTables) {
        await importEncounterTable(x)
    }
}

const importHexes = async () => {
    const data = await readCsv<HexRecord>(FILENAME)

    const regionsFromCsv = [...new Set(data.map(x => x.Region))].sort()
    const adventuresFromCsv = data
        .filter(x => x.Adventure !== '')
        .map(x => ({
            name: x.Adventure,
            hyperlink: x.Link,
            level: x.Level
        }))
        .filter((x, i, self) =>
            i === self.findIndex((y) => (
                x.name === y.name &&
                x.level === y.level &&
                x.hyperlink === y.hyperlink
            ))
        ).sort((a, b) => a.name.localeCompare(b.name))

    const regionResponses = await insertAllTheThings('regions', regionsFromCsv, (x) => ({ data: { name: x }}))
    const regions = regionResponses
        .map(x => x.data.data) // I don't know why there's two datas :/
        .map(x => ({
            id: x.id,
            name: x.attributes.name as string
        }))
        .reduce((a, c) => {
            a[c.name] = c
            return a
        }, {} as { [name: string]: Region })
    console.log(`Inserted ${Object.keys(regions).length} regions`)

    const adventureResponses = await insertAllTheThings('adventures', adventuresFromCsv)
    const adventures = adventureResponses
        .map(x => x.data.data) // I don't know why there's two datas :/
        .map(({ id, attributes: { name, level, hyperlink } }) => ({
            id,
            name: name as string,
            level: level as string,
            hyperlink: hyperlink as string
        }))
        .reduce((a: { [name: string]: Adventure }, c: Adventure) => {
            a[c.name] = c
            return a
        }, {} as { [name: string]: Adventure })
    console.log(`Inserted ${Object.keys(adventures).length} adventures`)

    const hexesFromCsv: Omit<Hex, 'id'>[] = data.map(x => ({
        reference: x.Index,
        region: regions[x.Region].id,
        adventure: Object.keys(adventures).some(y => y === x.Adventure) ? adventures[x.Adventure].id : undefined,
        landmark: x.Landmark,
        hidden: x.Hidden,
        secret: x.Secret
    }))

    const hexResponses = await insertAllTheThings('hexes', hexesFromCsv)
    console.log(`Inserted ${hexResponses.length} hexes`)
}

    ; (async () => {
        const authResponse = await axios.post(`${BASE}/auth/local`, {
            identifier: process.env.IMPORTER_USERNAME ?? '',
            password: process.env.IMPORTER_PASSWORD ?? '',
        })
        user = authResponse.data.user
        jwt = authResponse.data.jwt

        await wipe('encounters')
        await wipe('regions')
        await wipe('adventures')
        await wipe('hexes')
        console.log('Done')

        await importEncounters()
        await importHexes()
    })()
