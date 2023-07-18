import usePost from '../usePost'

const usePostTimer = () => {
  const post = usePost()
  return (timer) => post('timers', timer)
}

export default usePostTimer
