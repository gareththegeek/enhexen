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
      <section>
        <NpcDetails npc={npc} />
      </section>
      {npc?.faction && (
        <section>
          <FactionDetail faction={npc?.faction} />
        </section>
      )}
    </>
  )
}

export default NpcPage
