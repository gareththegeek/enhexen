import useDelete from '../useDelete'

const useDeleteLog = () => {
  const del = useDelete()
  return (id) => del(`log-entries/${id}`)
}

export default useDeleteLog
