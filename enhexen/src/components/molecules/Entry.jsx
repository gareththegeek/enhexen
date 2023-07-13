import PropTypes from 'prop-types'
import RelativeTime from '../atoms/RelativeTime'
import { toDateTime } from '../../dates'
import IconButton from '../atoms/IconButton'

const Entry = ({ entry, onDelete, onRenew }) => (
  <li className="flex gap-2 justify-between">
    <div className="flex gap-2">
      <RelativeTime value={toDateTime(entry.due)} />
      <p>{entry.name}</p>
    </div>
    <div className="flex gap-2">
      {onRenew && (
        <IconButton title="Renew" className="w-8" onClick={() => onRenew(entry)}>
          ↺
        </IconButton>
      )}
      {onDelete && (
        <IconButton title="Remove" className="w-8" onClick={() => onDelete(entry)}>
          X
        </IconButton>
      )}
    </div>
  </li>
)

Entry.propTypes = {
  entry: PropTypes.object,
  onDelete: PropTypes.func,
  onRenew: PropTypes.func,
}

export default Entry
