import PropTypes from 'prop-types'
import RelativeTime from '../atoms/RelativeTime'
import IconButton from '../atoms/IconButton'
import { useContext } from 'react'
import { ClockContext } from '../../contexts/ClockContext'
import { toDateTime } from '../../helpers/dates'

const TimersRow = ({ timer, onDelete, onRenew }) => {
  const { now } = useContext(ClockContext)
  const isNow = now.equals(toDateTime(timer.due))
  return (
    <tr key={timer.id} className={isNow ? 'selected-tr' : undefined}>
      <td className={`${onRenew && !isNow && 'text-grey-700'}`}>
        {timer.name}
      </td>
      <td className={`text-sm text-center ${!isNow && 'text-grey-700'}`}>
        <RelativeTime value={toDateTime(timer.due)} />
      </td>
      <td className="flex">
        {onRenew && (
          <IconButton className="w-8" title="Renew" onClick={() => onRenew(timer)}>
            ↺
          </IconButton>
        )}
        <IconButton className="w-8" title="Remove" onClick={() => onDelete(timer)}>
          X
        </IconButton>
      </td>
    </tr>
  )
}

TimersRow.propTypes = {
  timer: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRenew: PropTypes.func,
}

export default TimersRow
