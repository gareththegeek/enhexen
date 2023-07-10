import PropTypes from 'prop-types'
import OL from '../atoms/OL'
import Entry from '../molecules/Entry'

const TimersList = ({ timers, onRenew, onDelete, heading }) => (
  <>
    <h3>{heading}</h3>
    <OL>
      {timers?.map((timer) => (
        <Entry
          key={timer.id}
          entry={timer}
          onRenew={onRenew}
          onDelete={onDelete}
        />
      ))}
    </OL>
  </>
)

TimersList.propTypes = {
  heading: PropTypes.string.isRequired,
  timers: PropTypes.array,
  onRenew: PropTypes.func,
  onDelete: PropTypes.func,
}

export default TimersList
