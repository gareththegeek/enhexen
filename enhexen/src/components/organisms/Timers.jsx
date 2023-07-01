import { useContext, useState } from 'react'
import deleteTimer from '../../hooks/deleteTimer'
import useFetchTimers from '../../hooks/useFetchTimers'
import H2 from '../atoms/H2'
import Button from '../atoms/Button'
import AddTimer from './AddTimer'
import postTimer from '../../hooks/postTimer'
import TimersList from './TimersList'
import { ClockContext } from '../../contexts/ClockContext'
import { DateTime } from 'luxon'

const Timers = () => {
  const { now } = useContext(ClockContext)
  const [showAdd, setShowAdd] = useState(false)
  const { timers, mutateTimers } = useFetchTimers()
  const elapsedTimers = timers?.filter(
    ({ due }) => now >= DateTime.fromISO(due, { zone: 'utc' })
  )
  const upcomingTimers = timers?.filter(
    ({ due }) => now < DateTime.fromISO(due, { zone: 'utc' })
  )

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
