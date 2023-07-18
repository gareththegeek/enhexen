import usePut from '../usePut'

const usePutHex = () => {
  const put = usePut()
  return (hex) => put(`hexes/${hex.id}`, hex)
}

export default usePutHex
