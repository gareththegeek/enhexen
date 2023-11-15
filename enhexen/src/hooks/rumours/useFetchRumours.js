import { useFetchImmutable } from '../useFetch'

const useFetchRumours = (reference) => {
  const { data, mutate } = useFetchImmutable(
    `rumours?reference=${reference}`,
    !!reference
  )
  return { rumours: data, mutateRumours: () => mutate() }
}

export default useFetchRumours
