import PropTypes from 'prop-types'
import RelativeTime from '../atoms/RelativeTime'
import { toDateTime } from '../../dates'

const Entry = ({ entry, onDelete, onRenew }) => (
  <li className="flex gap-2">
    <RelativeTime value={toDateTime(entry.due)} />
    <p>{entry.name}</p>
    {onRenew && <button onClick={() => onRenew(entry)}>↺</button>}
    {onDelete && <button onClick={() => onDelete(entry)}>X</button>}
  </li>
)

Entry.propTypes = {
  entry: PropTypes.object,
  onDelete: PropTypes.func,
  onRenew: PropTypes.func,
}

export default Entry
