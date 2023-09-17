import useFetch from '../useFetch'

const useFetchLoot = () => {
  const { data, mutate } = useFetch('loots')
  return { loot: data, mutateLoot: () => mutate() }
}

export default useFetchLoot
