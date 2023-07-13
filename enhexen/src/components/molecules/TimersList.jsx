import PropTypes from 'prop-types'
import Entry from '../molecules/Entry'

const TimersList = ({ timers, onRenew, onDelete, heading }) => (
  <>
    <h3>{heading}</h3>
    <ol>
      {timers?.map((timer) => (
        <Entry
          key={timer.id}
          entry={timer}
          onRenew={onRenew}
          onDelete={onDelete}
        />
      ))}
    </ol>
  </>
)

TimersList.propTypes = {
  heading: PropTypes.string.isRequired,
  timers: PropTypes.array,
  onRenew: PropTypes.func,
  onDelete: PropTypes.func,
}

export default TimersList
