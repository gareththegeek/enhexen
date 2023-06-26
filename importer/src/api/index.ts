import axios from 'axios'
import { map, path } from 'ramda'
export * from './schema'

export interface StrapiEntity {
  id: number
  attributes: {
    name: string
    [key: string]: string | number | boolean | { data: StrapiResponse[] }
  }
}

export interface StrapiSubResponse {
  data: StrapiEntity
}

export interface StrapiResponse {
  data: StrapiSubResponse
}

const BASE = process.env.API_BASE ?? 'http://127.0.0.1:1337/api'

let user: string
let jwt: string

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
})

export const authenticate = async () => {
  const authResponse = await axios.post(`${BASE}/auth/local`, {
    identifier: process.env.IMPORTER_USERNAME ?? '',
    password: process.env.IMPORTER_PASSWORD ?? '',
  })
  user = authResponse.data.user
  jwt = authResponse.data.jwt
}

const delay = async (period: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), period))

const withRetry = async (
  call: () => Promise<StrapiResponse>,
  retries = 0
): Promise<StrapiResponse> => {
  try {
    return await call()
  } catch (ex) {
    if (retries === 0) {
      throw ex
    }
    console.log(`Failed request, retries: ${retries}`)
    await delay(Math.pow(10, 5 - retries))
    // await authenticate()
    return await withRetry(call, retries - 1)
  }
}

export const get = async (entityType: string): Promise<StrapiResponse> =>
  withRetry(() =>
    axios.get(`${BASE}/${entityType}?pagination[pageSize]=10000`, getHeaders())
  )

export const post = <T>(
  entityType: string,
  entity: T
): Promise<StrapiResponse> =>
  withRetry(() => axios.post(`${BASE}/${entityType}`, entity, getHeaders()))

export const put = <T extends StrapiEntity>(
  entityType: string,
  entity: Partial<T>
): Promise<StrapiResponse> =>
  withRetry(() =>
    axios.put(
      `${BASE}/${entityType}/${entity!.id}`,
      { data: entity.attributes },
      getHeaders()
    )
  )

export const delet3 = (
  entityType: string,
  id: string
): Promise<StrapiResponse> =>
  withRetry(() => axios.delete(`${BASE}/${entityType}/${id}`, getHeaders()))

export const postMany = async <T extends StrapiEntity>(
  entityType: string,
  records: T[],
  mapper = (y: T) => ({ data: y })
): Promise<StrapiEntity[]> => {
  const responses: StrapiResponse[] = []
  for (const x of records) {
    responses.push(await post(entityType, mapper(x)))
  }
  return map(path(['data', 'data']), responses) as StrapiEntity[]
}

// export const postMany = async <T extends StrapiEntity>(
//   entityType: string,
//   records: T[],
//   mapper = (y: T) => ({ data: y })
// ): Promise<StrapiEntity[]> => {
//   const responses: StrapiResponse[] = await axios.all(records.map(x => post(entityType, mapper(x))))

//   return map(path(['data', 'data']), responses) as StrapiEntity[]
// }
