import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import {
  useDeleteTimer,
  usePostTimer,
  usePutTimer,
  useFetchTimers,
} from '../../hooks/timers'
import { ClockContext } from '../../contexts/ClockContext'
import { toDateTime, toDuration } from '../../helpers/dates'
import Table from '../atoms/Table'
import TableHeadingButton from '../atoms/TableHeadingButton'
import AddTimer from './AddTimer'
import { mergeClass } from '../mergeClass'
import TimersRow from '../molecules/TimersRow'

const renderTimers = (timers, onDelete, onRenew) =>
  timers.map((timer) => (
    <TimersRow
      key={timer.id}
      timer={timer}
      onDelete={onDelete}
      onRenew={onRenew}
    />
  ))

const TimerTable = ({ className }) => {
  const { now } = useContext(ClockContext)
  const [showAdd, setShowAdd] = useState(false)
  const { timers, mutateTimers } = useFetchTimers()
  const deleteTimer = useDeleteTimer()
  const postTimer = usePostTimer()
  const putTimer = usePutTimer()
  const elapsedTimers = timers?.filter(({ due }) => now >= toDateTime(due))
  const upcomingTimers = timers?.filter(({ due }) => now < toDateTime(due))

  const handleAddClick = () => {
    setShowAdd(!showAdd)
  }

  const handleCancelClick = () => {
    setShowAdd(false)
  }

  const handleSaveClick = (timer) => {
    setShowAdd(false)
    postTimer(timer).then(mutateTimers)
  }

  const handleRenewClick = (timer) => {
    putTimer({
      ...timer,
      due: now.plus(toDuration(timer.duration)),
    }).then(mutateTimers)
  }

  const handleDeleteClick = (timer) => {
    deleteTimer(timer).then(mutateTimers)
  }

  return (
    <Table className={mergeClass({ className }, 'relative')}>
      {showAdd && (
        <AddTimer onSave={handleSaveClick} onCancel={handleCancelClick} />
      )}
      <thead>
        <tr>
          <th>Timers</th>
          <th className="w-24"></th>
          <th className="w-1"></th>
          <TableHeadingButton
            className="w-1"
            secondary
            onClick={handleAddClick}
          >
            {showAdd ? 'Cancel' : 'Add'}
          </TableHeadingButton>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h3>Elapsed</h3>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {elapsedTimers &&
          renderTimers(elapsedTimers, handleDeleteClick, handleRenewClick)}
        <tr>
          <td>
            <h3>Upcoming</h3>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {upcomingTimers && renderTimers(upcomingTimers, handleDeleteClick)}
      </tbody>
    </Table>
  )
}

TimerTable.propTypes = {
  className: PropTypes.string,
}

export default TimerTable
