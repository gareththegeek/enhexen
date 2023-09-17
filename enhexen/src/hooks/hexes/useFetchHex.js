import useFetch from '../useFetch'

const useFetchHex = (reference) => {
  const { data, mutate } = useFetch(
    `hexes?populate[region]=1&populate[adventure]=1&populate[settlement]=1&populate[assets][populate]=faction&populate[domain][populate][0]=faction&populate[npcs][populate]=faction&filters[reference]=${reference}`,
    !!reference
  )
  return { hex: data && data[0], mutateHex: () => mutate() }
}

export default useFetchHex
