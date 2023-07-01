import PropTypes from 'prop-types'

const Clock = ({ value }) => (
  <div>
    {value?.toLocaleString({
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })}
  </div>
)

Clock.propTypes = {
  value: PropTypes.object,
}

export default Clock
