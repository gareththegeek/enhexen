import { useContext } from 'react'
import PropTypes from 'prop-types'
import { formatDate, toDateTime } from '../../helpers/dates'
import { LogContext } from '../../contexts/LogContext'
import useFetchLog from '../../hooks/logs/useFetchLog'
import Button from '../atoms/Button'
import Table from '../atoms/Table'

const LogTable = ({ addButton, onEdit, className }) => {
  const { searchText } = useContext(LogContext)
  const { entries } = useFetchLog(searchText)

  return (
    <Table className={className}>
      <thead>
        <tr>
          <th>Log</th>
          <th></th>
          {addButton}
        </tr>
      </thead>
      <tbody>
        {entries?.map((logEntry) => (
          <tr key={logEntry.id}>
            <td>{formatDate(toDateTime(logEntry.created))}</td>
            <td>{logEntry.text}</td>
            <td>
              <Button onClick={() => onEdit(logEntry)}>Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

LogTable.propTypes = {
  addButton: PropTypes.node,
  onEdit: PropTypes.func,
  className: PropTypes.string,
}

export default LogTable
