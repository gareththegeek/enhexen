import usePut from '../usePut'

const usePutLog = () => {
  const put = usePut()
  return (log) => put(`log-entries/${log.id}`, log)
}

export default usePutLog
