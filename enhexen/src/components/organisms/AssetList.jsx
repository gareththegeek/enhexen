import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import Link from '../atoms/Link'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'

const AssetList = ({ assets }) => (
  <section>
    <H2>Assets</H2>
    {assets.length > 0 ? (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>HP</th>
            <th>Attack</th>
            <th>Counter</th>
            <th>Qualities</th>
            <th>Faction</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((x) => (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td>
                {x.hp}/{x.maxHp}
              </td>
              <td>{x.attack}</td>
              <td>{x.counter}</td>
              <td>{x.qualities}</td>
              <td>
                <Link to={`factions/${x.faction.id}`}>{x.faction.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <Placeholder>There are no assets here</Placeholder>
    )}
  </section>
)

AssetList.propTypes = {
  assets: PropTypes.array,
}

export default AssetList
