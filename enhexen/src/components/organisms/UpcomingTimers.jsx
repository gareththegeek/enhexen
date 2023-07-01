import PropTypes from 'prop-types'
import { useContext } from 'react'
import useFetchUpcomingTimers from '../../hooks/useFetchUpcomingTimers'
import { ClockContext } from '../../contexts/ClockContext'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import Entry from '../molecules/Entry'

const UpcomingTimers = ({ onDelete }) => {
  const { now } = useContext(ClockContext)
  const upcomingTimers = useFetchUpcomingTimers(now)
  return (
    <OL>
      <LI>-Up-coming-</LI>
      {upcomingTimers?.map((timer) => (
        <Entry key={timer.id} entry={timer} onDelete={onDelete} />
      ))}
    </OL>
  )
}

UpcomingTimers.propTypes = {
  onDelete: PropTypes.func,
}

export default UpcomingTimers
