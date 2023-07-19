import PropTypes from 'prop-types'
import RelativeTime from '../atoms/RelativeTime'
import { toDateTime } from '../../helpers/dates'
import IconButton from '../atoms/IconButton'
import { useContext } from 'react'
import { ClockContext } from '../../contexts/ClockContext'

const Entry = ({ entry, onDelete, onRenew }) => {
  const { now } = useContext(ClockContext)
  const isNow = now.equals(toDateTime(entry.due))
  return (
    <li className={`flex gap-2 justify-between ${isNow && 'font-semibold'}`}>
      <div className="flex gap-2">
        <RelativeTime value={toDateTime(entry.due)} />
        <p>{entry.name}</p>
      </div>
      <div className="flex gap-2">
        {onRenew && (
          <IconButton
            title="Renew"
            className="w-8"
            onClick={() => onRenew(entry)}
          >
            ↺
          </IconButton>
        )}
        {onDelete && (
          <IconButton
            title="Remove"
            className="w-8"
            onClick={() => onDelete(entry)}
          >
            X
          </IconButton>
        )}
      </div>
    </li>
  )
}

Entry.propTypes = {
  entry: PropTypes.object,
  onDelete: PropTypes.func,
  onRenew: PropTypes.func,
}

export default Entry
