import useDelete from '../useDelete'

const useDeleteTimer = () => {
  const del = useDelete()
  return ({ id }) => del(`timers/${id}`)
}

export default useDeleteTimer
