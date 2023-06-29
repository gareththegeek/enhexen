import useFetch from './useFetch'

const useFetchHex = (reference) =>
  useFetch(
    `hexes?populate=region&populate[adventure]=1&populate[settlement]=1&populate[assets][populate]=faction&populate[domain][populate][0]=faction&populate[npcs][populate]=faction&filters[reference]=${reference}`,
    !!reference
  )

export default useFetchHex
