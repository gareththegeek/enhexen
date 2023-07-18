import useDelete from '../useDelete'

const useDeleteLoot = () => {
  const del = useDelete()
  return ({ id }) => del(`loots/${id}`)
}

export default useDeleteLoot
