export interface Hex {
  id: number
  reference: string
  region: number
  domain?: number
  adventure?: number
  landmark: string
  hidden: string
  secret: string
}

export interface Region {
  id: number
  name: string
}

export interface Settlement {
  id: number
  name: string
}

export interface Adventure {
  id: number
  name: string
  level: string
  hyperlink: string
}
