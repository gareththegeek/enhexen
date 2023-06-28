import useFetch from './useFetch'

const useFetchRumours = (reference) =>
  useFetch(`rumours?reference=${reference}`, !!reference)

export default useFetchRumours
