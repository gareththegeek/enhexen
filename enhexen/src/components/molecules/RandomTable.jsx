import PropTypes from 'prop-types'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'

const RandomTable = ({ items }) =>
  items?.length ? (
    <Table>
      <thead>
        <tr>
          <th>Roll</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, roll, description }) => (
          <tr key={`${id}`}>
            <td>{roll}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <Placeholder>No encounters</Placeholder>
  )

RandomTable.propTypes = {
  items: PropTypes.array,
}

export default RandomTable
