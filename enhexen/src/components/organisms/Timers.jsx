import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import {
  deleteTimer,
  postTimer,
  putTimer,
  useFetchTimers,
} from '../../hooks/timers'
import AddTimer from '../organisms/AddTimer'
import TimersList from '../molecules/TimersList'
import { ClockContext } from '../../contexts/ClockContext'
import { toDateTime, toDuration } from '../../dates'
import ButtonHeading from '../molecules/ButtonHeading'
import { mergeClass } from '../mergeClass'
import Section from '../atoms/Section'

const Timers = ({ className }) => {
  const { now } = useContext(ClockContext)
  const [showAdd, setShowAdd] = useState(false)
  const { timers, mutateTimers } = useFetchTimers()
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
    <Section
      className={mergeClass({ className })}
      heading={
        <ButtonHeading
          heading="Timers"
          button={showAdd ? 'Cancel' : 'Add'}
          handleClick={handleAddClick}
        />
      }
    >
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
    </Section>
  )
}

Timers.propTypes = {
  className: PropTypes.string,
}

export default Timers
