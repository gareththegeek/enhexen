export interface CsvRecord {}

export interface EncounterRecord extends CsvRecord {
  Region: string
  Roll: string
  Encounter: string
}

export interface HexRecord extends CsvRecord {
  Index: string
  Region: string
  Settlement: string
  Landmark: string
  Hidden: string
  Secret: string
  Adventure: string
  Level: string
  Link: string
}

export interface RumourRecord extends CsvRecord {
  Adventure: string
  Roll: string
  Rumour: string
}
