import useFetch from '../useFetch'

const useFetchLog = ({ page, searchText } = {}) => {
  const { data, meta, mutate } = useFetch(
    `log-entries?sort[0]=pinned:desc&sort[1]=created:desc&sort[2]=text${
      searchText ? `&_q=${searchText}` : ''
    }${page ? `&pagination[page]=${page}&pagination[withCount]=true` : ''}`
  )
  return { entries: data, meta, mutateEntries: () => mutate() }
}

export default useFetchLog
