import useFetch from './useFetch'

const useFetchRegion = (id) => useFetch(`regions/${id}?populate=encounters`)

export default useFetchRegion
