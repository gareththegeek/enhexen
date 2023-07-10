import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ClockContext } from '../../contexts/ClockContext'
import { mergeClass, noClass } from '../mergeClass'

const RelativeTime = ({ value, ...rest }) => {
  const { now } = useContext(ClockContext)
  const text = now.equals(value) ? 'now' : value.toRelative({ base: now })
  const casedText = text.substring(0, 1).toUpperCase() + text.substring(1)
  return (
    <p className={mergeClass(rest)} {...noClass(rest)}>
      {casedText}
    </p>
  )
}

RelativeTime.propTypes = {
  value: PropTypes.object,
}

export default RelativeTime
