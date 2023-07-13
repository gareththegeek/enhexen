import { useParams } from 'react-router-dom'
import { useFetchNpc } from '../hooks/npcs'
import Placeholder from '../components/atoms/Placeholder'
import NpcDetails from '../components/molecules/NpcDetails'
import FactionStats from '../components/organisms/FactionStats'

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
          <p>{npc?.faction?.description}</p>
          <FactionStats faction={npc?.faction} />
        </section>
      )}
    </>
  )
}

export default NpcPage
