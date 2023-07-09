import useFetch from '../useFetch'

const useFetchNpc = (id) => {
  const { data, mutate } = useFetch(`npcs/${id}?populate=faction`, !!id)
  return { npc: data, mutateNpc: mutate }
}

export default useFetchNpc
