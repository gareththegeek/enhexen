import usePut from '../usePut'

const usePutTimer = () => {
  const put = usePut()
  return (timer) => put(`timers/${timer.id}`, timer)
}

export default usePutTimer
