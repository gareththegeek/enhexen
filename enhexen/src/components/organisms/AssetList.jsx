import PropTypes from 'prop-types'
import Link from '../atoms/Link'
import Table from '../atoms/Table'
import Section from '../atoms/Section'

const AssetList = ({ assets, faction, showHex }) => {
  if (!assets?.length) {
    return (
      <Section heading={<h2>Assets</h2>}>
        There are no assets currently stationed here
      </Section>
    )
  }
  
  return (
    <Table>
      <thead>
        <tr>
          <th>Asset</th>
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
  )
}

AssetList.propTypes = {
  assets: PropTypes.array,
  faction: PropTypes.object,
  showHex: PropTypes.bool,
}

export default AssetList
