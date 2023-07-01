import PropTypes from 'prop-types'
import { useContext } from 'react'
//import useFetchUpcomingTimers from '../../hooks/useFetchUpcomingTimers'
import useSWR from 'swr'
import { ClockContext } from '../../contexts/ClockContext'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import Entry from '../molecules/Entry'

const TimersList = ({ timers, onDelete, heading }) => (
  <OL>
    <LI>{heading}</LI>
    {timers?.map((timer) => (
      <Entry key={timer.id} entry={timer} onDelete={onDelete} />
    ))}
  </OL>
)

TimersList.propTypes = {
  heading: PropTypes.string.isRequired,
  timers: PropTypes.array,
  onDelete: PropTypes.func,
}

export default TimersList
