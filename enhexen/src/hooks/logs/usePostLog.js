import usePost from '../usePost'

const usePostLog = () => {
  const post = usePost()
  return (log) => post('log-entries', log)
}

export default usePostLog
