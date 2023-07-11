import PropTypes from 'prop-types'
import Link from '../atoms/Link'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const NpcList = ({ npcs, faction, showHex }) => {
  const isLarge = useMediaQuery('(min-width: 640px)')

  if (!npcs.length) {
    return <Placeholder>There are no NPCs here</Placeholder>
  }

  if (!isLarge) {
    return (
      <section>
        <h3>NPCs</h3>
        <ul>
          {npcs.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/npcs/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>NPC</th>
          <th>Position</th>
          <th>Source of Power</th>
          <th>Residence</th>
          {showHex ? <th>Hex</th> : <th>Faction</th>}
        </tr>
      </thead>
      <tbody>
        {npcs.map((x) => (
          <tr key={x.id}>
            <td>{x.name}</td>
            <td>{x.position}</td>
            <td>{x.sourceOfPower}</td>
            <td>{x.residence}</td>
            {showHex ? (
              <td>
                <Link to={`/${x.hex?.reference}`}>{x.hex?.reference}</Link>
              </td>
            ) : (
              <td>
                <Link to={`/factions/${x.faction?.id ?? faction.id}`}>
                  {x.faction?.name ?? faction.name}
                </Link>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

NpcList.propTypes = {
  npcs: PropTypes.array,
  faction: PropTypes.object,
  showHex: PropTypes.bool,
}

export default NpcList
