import { useState } from 'react'
import deleteTimer from '../../hooks/deleteTimer'
import H2 from '../atoms/H2'
import Button from '../atoms/Button'
import AddTimer from './AddTimer'
import postTimer from '../../hooks/postTimer'
import ElapsedTimers from './ElapsedTimers'
import UpcomingTimers from './UpcomingTimers'

const Timers = () => {
  const [showAdd, setShowAdd] = useState(false)
  const handleAddClick = () => {
    setShowAdd(true)
  }

  const handleCancelClick = () => {
    setShowAdd(false)
  }

  const handleSaveClick = (timer) => {
    setShowAdd(false)
    postTimer(timer)
  }

  const handleDeleteClick = (timer) => {
    deleteTimer(timer)
  }

  return (
    <section>
      <H2>Timers</H2>
      <Button onClick={handleAddClick}>Add</Button>
      {showAdd && (
        <AddTimer onSave={handleSaveClick} onCancel={handleCancelClick} />
      )}
      <ElapsedTimers onDelete={handleDeleteClick} />
      <UpcomingTimers onDelete={handleDeleteClick} />
    </section>
  )
}

export default Timers
