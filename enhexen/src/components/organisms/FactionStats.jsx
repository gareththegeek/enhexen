import PropTypes from 'prop-types'
import Table from '../atoms/Table'

const FactionStats = ({
  faction: { cunning, force, wealth, income, magic, treasure, hitPoints },
}) => (
  <Table>
    <thead>
      <tr>
        <th>Cunning</th>
        <th>Force</th>
        <th>Wealth</th>
        <th>Income</th>
        <th>Magic</th>
        <th>Treasure</th>
        <th>HP</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{cunning}</td>
        <td>{force}</td>
        <td>{wealth}</td>
        <td>{income}</td>
        <td>{magic}</td>
        <td>{treasure}</td>
        <td>{hitPoints}</td>
      </tr>
    </tbody>
  </Table>
)

FactionStats.propTypes = {
  faction: PropTypes.object.isRequired,
}

export default FactionStats
