const mapStrapiEntity = ({id, attributes}) => {
    const result = {id, ...attributes}
    // TODO handle relations which are arrays
    Object.entries(result).forEach(([key, value]) => {
        if (!value?.data?.attributes) {
            return
        }
        result[key] = mapStrapiEntity(value.data)
    })
    return result
}

const fetcher = async (...args) => {
    const response = await fetch(...args)
    const result = await response.json()
    const data = result.data.map(mapStrapiEntity)
    return data.length === 1 ? data[0] : data
}

export default fetcher
