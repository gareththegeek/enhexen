import usePost from '../usePost'

const usePostTag = () => {
  const post = usePost()
  return (tag) => post('tags', tag)
}

export default usePostTag
