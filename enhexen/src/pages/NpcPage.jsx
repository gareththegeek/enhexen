import { useParams } from 'react-router-dom'
import { useFetchNpc } from '../hooks/npcs'
import Placeholder from '../components/atoms/Placeholder'
import NpcDetails from '../components/molecules/NpcDetails'
import FactionStats from '../components/organisms/FactionStats'
import Section from '../components/atoms/Section'
import SideBySide from '../components/atoms/SideBySide'

const NpcPage = () => {
  const { id } = useParams()
  const { npc } = useFetchNpc(id)

  if (!npc) {
    return <Placeholder>Loading NPC</Placeholder>
  }

  return (
    <>
      <SideBySide>
        <NpcDetails className="flex-1" npc={npc} />
        {npc?.faction && (
          <Section heading={<h2>Stats</h2>} className="flex-1">
            <FactionStats faction={npc?.faction} />
          </Section>
        )}
      </SideBySide>
    </>
  )
}

export default NpcPage
