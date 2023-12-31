const mapStrapiEntity = (entity) => {
  const { id, attributes } = entity
  const result = { id, ...attributes }

  for (const [key, value] of Object.entries(result)) {
    if (!value) {
      continue
    }
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

const parseResponse = async (response) => {
  const result = await response.json()

  return {
    data: Array.isArray(result.data)
      ? result.data.map(mapStrapiEntity)
      : mapStrapiEntity(result.data),
    meta: result.meta,
  }
}

export default parseResponse
