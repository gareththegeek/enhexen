import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Duration } from 'luxon'
import { putClock } from '../../hooks/clock'
import { usePublish } from '../../hooks/pubsub'
import { ClockContext } from '../../contexts/ClockContext'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import IconButton from '../atoms/IconButton'

const explorationToWildernessSpeedQuotient = 5
const standardHexesPerDay = 12

const TimeAdvance = ({ options, applyTravelSpeed, speed }) => {
  const { now, setNow } = useContext(ClockContext)
  const publish = usePublish('CLOCK_CHANGE')

  const getDuration = (amount) => {
    const travelFactor = applyTravelSpeed
      ? (explorationToWildernessSpeedQuotient * standardHexesPerDay) / speed
      : 1
    return Duration.fromObject(amount).mapUnits((x) => x * travelFactor)
  }

  const handleClick = (amount) => {
    const duration = getDuration(amount)
    const nextNow = now.plus(duration)

    setNow(nextNow)
    putClock(nextNow).then(publish({ duration }))
  }

  const formatAmount = (amount) => {
    const duration = getDuration(amount)
    if (duration.minutes) {
      return `${duration.minutes}m`
    }
    if (duration.hours) {
      return `${duration.hours}h`
    }
    if (duration.days) {
      return `${duration.days}d`
    }
    if (duration.weeks) {
      return `${duration.weeks}w`
    }
    if (duration.months) {
      return `${duration.months}mth`
    }
    throw new Error(`Unknown period type: ${Object.keys(amount)[0]}`)
  }

  return (
    <OL className="flex gap-2">
      {options.map(({ icon, amount, title }) => (
        <LI key={icon}>
          <IconButton title={title} onClick={() => handleClick(amount)}>
            {formatAmount(amount)}
          </IconButton>
        </LI>
      ))}
    </OL>
  )
}

TimeAdvance.propTypes = {
  options: PropTypes.array,
  applyTravelSpeed: PropTypes.bool,
  speed: PropTypes.number,
}

export default TimeAdvance
