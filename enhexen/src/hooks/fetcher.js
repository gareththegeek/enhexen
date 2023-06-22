const mapStrapiEntity = (entity) => {
  const { id, attributes } = entity
  const result = { id, ...attributes }

  for (const [key, value] of Object.entries(result)) {
    if (!Object.prototype.hasOwnProperty.call(value, 'data')) {
      continue
    }
    const data = value.data
    if (data === null) {
      delete result[key]
      continue
    }
    if (Array.isArray(data)) {
      result[key] = data.map(mapStrapiEntity)
      continue
    }
    if (!data.attributes) {
      continue
    }
    result[key] = mapStrapiEntity(data)
  }
  return result
}

const fetcher = async (...args) => {
  const response = await fetch(...args)
  const result = await response.json()
  const data = Array.isArray(result.data)
    ? result.data.map(mapStrapiEntity)
    : mapStrapiEntity(result.data)

  if (!Array.isArray(data)) {
    return data
  }

  return data.length === 1 ? data[0] : undefined
}

export default fetcher
