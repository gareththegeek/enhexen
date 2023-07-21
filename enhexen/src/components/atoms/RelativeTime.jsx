import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ClockContext } from '../../contexts/ClockContext'

const RelativeTime = ({ value }) => {
  const { now } = useContext(ClockContext)
  const text = now.equals(value) ? '⏰Now' : value.toRelative({ base: now })
  const casedText = text.substring(0, 1).toUpperCase() + text.substring(1)
  return casedText
}

RelativeTime.propTypes = {
  value: PropTypes.object,
}

export default RelativeTime
