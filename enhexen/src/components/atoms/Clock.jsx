import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Clock = ({ value, ...rest }) => (
  <div className={mergeClass(rest)} {...noClass(rest)}>
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
