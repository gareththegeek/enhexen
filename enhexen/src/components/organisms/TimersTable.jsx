import PropTypes from 'prop-types'
import { useContext } from 'react'
import { useDeleteTimer, usePutTimer, useFetchTimers } from '../../hooks/timers'
import { ClockContext } from '../../contexts/ClockContext'
import { toDateTime, toDuration } from '../../helpers/dates'
import Table from '../atoms/Table'
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

const TimerTable = ({ addButton, className }) => {
  const { now } = useContext(ClockContext)
  const { timers, mutateTimers } = useFetchTimers()
  const deleteTimer = useDeleteTimer()
  const putTimer = usePutTimer()
  const elapsedTimers = timers?.filter(({ due }) => now >= toDateTime(due))
  const upcomingTimers = timers?.filter(({ due }) => now < toDateTime(due))

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
    <Table className={className}>
      <thead>
        <tr>
          <th>Timers</th>
          <th className="w-26"></th>
          {addButton}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h3>Elapsed</h3>
          </td>
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
        </tr>
        {upcomingTimers && renderTimers(upcomingTimers, handleDeleteClick)}
      </tbody>
    </Table>
  )
}

TimerTable.propTypes = {
  addButton: PropTypes.node,
  className: PropTypes.string,
}

export default TimerTable
