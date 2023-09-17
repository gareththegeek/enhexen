import useFetch from '../useFetch'

const useFetchRumours = (reference) => {
  const { data, mutate } = useFetch(
    `rumours?reference=${reference}`,
    !!reference
  )
  return { rumours: data, mutateRumours: () => mutate() }
}

export default useFetchRumours
