import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import Link from '../atoms/Link'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'

const AssetList = ({ assets, faction, showHex }) => (
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
            {showHex ? <th>Hex</th> : <th>Faction</th>}
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
      <Placeholder>There are no assets here</Placeholder>
    )}
  </section>
)

AssetList.propTypes = {
  assets: PropTypes.array,
  faction: PropTypes.object,
  showHex: PropTypes.bool,
}

export default AssetList
