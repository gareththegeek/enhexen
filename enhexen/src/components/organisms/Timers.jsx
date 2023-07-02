import { useContext, useState } from 'react'
import { deleteTimer, postTimer, putTimer, useFetchTimers } from '../../hooks/timers'
import H2 from '../atoms/H2'
import Button from '../atoms/Button'
import AddTimer from './AddTimer'
import TimersList from './TimersList'
import { ClockContext } from '../../contexts/ClockContext'
import { toDateTime, toDuration } from '../../dates'

const Timers = () => {
  const { now } = useContext(ClockContext)
  const [showAdd, setShowAdd] = useState(false)
  const { timers, mutateTimers } = useFetchTimers()
  const elapsedTimers = timers?.filter(({ due }) => now >= toDateTime(due))
  const upcomingTimers = timers?.filter(({ due }) => now < toDateTime(due))

  const handleAddClick = () => {
    setShowAdd(true)
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
    <section>
      <H2>Timers</H2>
      <Button onClick={handleAddClick}>Add</Button>
      {showAdd && (
        <AddTimer onSave={handleSaveClick} onCancel={handleCancelClick} />
      )}
      {timers && (
        <>
          <TimersList
            heading="-Elapsed-"
            onRenew={handleRenewClick}
            onDelete={handleDeleteClick}
            timers={elapsedTimers}
          />
          <TimersList
            heading="-Up-coming-"
            onDelete={handleDeleteClick}
            timers={upcomingTimers}
          />
        </>
      )}
    </section>
  )
}

export default Timers
