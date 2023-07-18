import usePost from '../usePost'

const usePostLoot = () => {
  const post = usePost()
  return (loot) => post('loots', loot)
}

export default usePostLoot
