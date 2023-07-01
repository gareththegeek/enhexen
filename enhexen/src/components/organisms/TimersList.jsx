import PropTypes from 'prop-types'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import Entry from '../molecules/Entry'

const TimersList = ({ timers, onRenew, onDelete, heading }) => (
  <OL>
    <LI>{heading}</LI>
    {timers?.map((timer) => (
      <Entry key={timer.id} entry={timer} onRenew={onRenew} onDelete={onDelete} />
    ))}
  </OL>
)

TimersList.propTypes = {
  heading: PropTypes.string.isRequired,
  timers: PropTypes.array,
  onRenew: PropTypes.func,
  onDelete: PropTypes.func,
}

export default TimersList
