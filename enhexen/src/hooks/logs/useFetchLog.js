import useFetch from '../useFetch'

const useFetchLog = (searchText) => {
  const { data, mutate } = useFetch(
    `log-entries${searchText ? `?_q=${searchText}` : ''}`
  )
  return { entries: data, mutateEntries: mutate }
}

export default useFetchLog
