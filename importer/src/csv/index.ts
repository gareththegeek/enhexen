import fs from 'fs'
import csvParser from 'csv-parser'
export * from './schema'

const readCsv = <T>(filename: string): Promise<T[]> =>
  new Promise((resolve) => {
    const result: T[] = []
    fs.createReadStream(filename)
      .pipe(csvParser())
      .on('data', (data) => {
        result.push(data as T)
      })
      .on('end', () => {
        resolve(result)
      })
  })

export default readCsv
