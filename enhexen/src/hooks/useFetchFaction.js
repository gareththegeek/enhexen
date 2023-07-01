import useFetch from './useFetch'

const useFetchFaction = (id) => {
  const { data, mutate } = useFetch(
    `factions/${id}?populate[assets][populate]=hex&populate[npcs][populate]=hex&populate[domains]=1`,
    !!id
  )
  return { faction: data, mutateFaction: mutate }
}

export default useFetchFaction
