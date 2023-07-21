import PropTypes from 'prop-types'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import Link from '../atoms/Link'
import Table from '../atoms/Table'
import Section from '../atoms/Section'
import Placeholder from '../atoms/Placeholder'
import Npc from '../molecules/Npc'

const NpcTable = ({ npcs, faction, showHex, className }) => {
  const isLarge = useMediaQuery('(min-width: 640px)')
  if (!npcs.length) {
    return (
      <Section className={className} heading={<h2>NPCs</h2>}>
        <Placeholder>There are no NPCs here</Placeholder>
      </Section>
    )
  }

  return (
    <Table className={className}>
      <thead>
        <tr>
          <th colSpan={isLarge ? 2 : 1}>NPC</th>
          {showHex ? (
            <th className="text-center">Hex</th>
          ) : (
            <th className="text-center">Faction</th>
          )}
        </tr>
      </thead>
      <tbody>
        {npcs.map((npc) => (
          <tr key={npc.id}>
            {isLarge && <td className="w-2">🫅</td>}
            <td>
              <Npc npc={npc} />
            </td>
            {showHex ? (
              <td className="text-center">
                <Link to={`/${npc.hex?.reference}`}>{npc.hex?.reference}</Link>
              </td>
            ) : (
              <td className="text-center">
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
  className: PropTypes.string,
}

export default NpcTable
