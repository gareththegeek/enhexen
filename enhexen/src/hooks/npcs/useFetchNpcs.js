import useFetch from '../useFetch'

const useFetchNpcs = () => {
  const { data, mutate } = useFetch('npcs')
  return { npcs: data, mutateNpcs: mutate }
}

export default useFetchNpcs
