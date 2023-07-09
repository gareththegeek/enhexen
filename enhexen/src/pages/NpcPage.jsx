import { useParams } from 'react-router-dom'
import { useFetchNpc } from '../hooks/npcs'
import Placeholder from '../components/atoms/Placeholder'
import FactionDetail from '../components/organisms/FactionDetail'
import NpcDetails from '../components/organisms/NpcDetails'

const NpcPage = () => {
  const { id } = useParams()
  const { npc } = useFetchNpc(id)

  if (!npc) {
    return <Placeholder>Loading NPC</Placeholder>
  }

  return (
    <>
      <NpcDetails npc={npc} />
      {npc?.faction && <FactionDetail faction={npc?.faction} />}
    </>
  )
}

export default NpcPage
