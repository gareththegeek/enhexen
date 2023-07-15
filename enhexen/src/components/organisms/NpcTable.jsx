import PropTypes from 'prop-types'
import {useMediaQuery} from '../../hooks/useMediaQuery'
import Link from '../atoms/Link'
import Table from '../atoms/Table'
import Section from '../atoms/Section'
import Placeholder from '../atoms/Placeholder'
import Npc from '../molecules/Npc'

const NpcTable = ({ npcs, faction, showHex }) => {
  const isLarge = useMediaQuery('(min-width: 640px)')
  if (!npcs.length) {
    return (
      <Section heading={<h2>NPCs</h2>}>
        <Placeholder>There are no NPCs here</Placeholder>
      </Section>
    )
  }

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={isLarge ? 2 : 1}>NPC</th>
          {showHex ? <th>Hex</th> : <th>Faction</th>}
        </tr>
      </thead>
      <tbody>
        {npcs.map((npc) => (
          <tr key={npc.id}>
            {isLarge && <td>🫅</td>}
            <td>
              <Npc npc={npc} />
            </td>
            {showHex ? (
              <td>
                <Link to={`/${npc.hex?.reference}`}>{npc.hex?.reference}</Link>
              </td>
            ) : (
              <td>
                <Link to={`/factions/${npc.faction?.id ?? faction.id}`}>
                  {npc.faction?.name ?? faction.name}
                </Link>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

NpcTable.propTypes = {
  npcs: PropTypes.array,
  faction: PropTypes.object,
  showHex: PropTypes.bool,
}

export default NpcTable
