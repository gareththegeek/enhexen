import usePut from '../usePut'

const usePutRumour = () => {
  const put = usePut()
  return (rumour) => put(`rumours/${rumour.id}`, rumour)
}

export default usePutRumour
