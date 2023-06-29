import useFetch from './useFetch'

const useFetchFaction = (id) =>
  useFetch(`factions/${id}?populate[assets][populate]=hex&populate[npcs][populate]=hex&populate[domains]=1`, !!id)

export default useFetchFaction
