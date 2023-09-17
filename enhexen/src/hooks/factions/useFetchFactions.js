import useFetch from '../useFetch'

const useFetchFactions = () => {
  const { data, mutate } = useFetch('factions')
  return { factions: data, mutateFactions: () => mutate() }
}

export default useFetchFactions
