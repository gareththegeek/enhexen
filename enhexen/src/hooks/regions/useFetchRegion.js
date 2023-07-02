import useFetch from '../useFetch'

const useFetchRegion = (id) => {
  const { data, mutate } = useFetch(`regions/${id}?populate=encounters`)
  return { region: data, mutateRegion: mutate }
}

export default useFetchRegion
