import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import Link from '../atoms/Link'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'

const NpcList = ({ npcs, faction, showHex }) => (
  <section>
    <H2>NPCs</H2>
    {npcs.length > 0 ? (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
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
    ) : (
      <Placeholder>There are no NPCs here</Placeholder>
    )}
  </section>
)

NpcList.propTypes = {
  npcs: PropTypes.array,
  faction: PropTypes.object,
  showHex: PropTypes.bool,
}

export default NpcList