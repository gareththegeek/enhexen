export interface CsvRecord {}

export interface FactionRecord extends CsvRecord {
  Faction: string
  Description: string
  Cunning: number
  Force: number
  Wealth: number
  Income: number
  Magic: "None" | "Low" | "Medium" | "High"
  Treasure: number
  HitPoints: number
  Hq: string
}

export interface EncounterRecord extends CsvRecord {
  Region: string
  Roll: string
  Encounter: string
}

export interface HexRecord extends CsvRecord {
  Index: string
  Faction: string
  Domain: string
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
