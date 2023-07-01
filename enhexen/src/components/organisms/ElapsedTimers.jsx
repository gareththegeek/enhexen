import PropTypes from 'prop-types'
import { useContext } from 'react'
import useFetchElapsedTimers from '../../hooks/useFetchElapsedTimers'
import { ClockContext } from '../../contexts/ClockContext'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import Entry from '../molecules/Entry'

const ElapsedTimers = ({ onDelete }) => {
  const { now } = useContext(ClockContext)
  const elapsedTimers = useFetchElapsedTimers(now)
  return (
    elapsedTimers?.length && (
      <OL>
        <LI>-Elapsed-</LI>
        {elapsedTimers.map((timer) => (
          <Entry key={timer.id} entry={timer} onDelete={onDelete} />
        ))}
      </OL>
    )
  )
}

ElapsedTimers.propTypes = {
  onDelete: PropTypes.func,
}

export default ElapsedTimers
