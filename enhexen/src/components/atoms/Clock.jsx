import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'
import { formatDate } from '../../helpers/dates'

const Clock = ({ value, ...rest }) => (
  <div className={mergeClass(rest)} {...noClass(rest)}>
    {formatDate(value)}
  </div>
)

Clock.propTypes = {
  value: PropTypes.object,
}

export default Clock
