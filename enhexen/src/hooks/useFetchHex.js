import useFetch from './useFetch'

const useFetchHex = (reference) =>
  useFetch(
    `hexes?populate=region&populate=adventure&populate=settlement&populate[domain][populate][0]=faction&populate=assets&filters[reference]=${reference}`,
    !!reference
  )

export default useFetchHex
