import PropTypes from 'prop-types'
import P from './P'
import { useContext } from 'react'
import { ClockContext } from '../../contexts/ClockContext'

const RelativeTime = ({ value }) => {
  const { now } = useContext(ClockContext)
  const text = now.equals(value) ? 'now' : value.toRelative({ base: now })
  const casedText = text.substring(0, 1).toUpperCase() + text.substring(1)
  return <P>{casedText}</P>
}

RelativeTime.propTypes = {
  value: PropTypes.object,
}

export default RelativeTime
