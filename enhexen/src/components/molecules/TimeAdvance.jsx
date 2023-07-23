import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Duration } from 'luxon'
import useClock from '../../hooks/clock'
import { usePublish } from '../../hooks/pubsub'
import { ClockContext } from '../../contexts/ClockContext'
import IconButton from '../atoms/IconButton'
import { round1 } from '../../helpers/maths'
import Label from '../atoms/Label'

const explorationToWildernessSpeedQuotient = 5
const standardHexesPerDay = 12

const TimeAdvance = ({ options, applyTravelSpeed, speed }) => {
  const { now, setNow } = useContext(ClockContext)
  const { putClock } = useClock()
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
      return `${round1(duration.minutes)}m`
    }
    if (duration.hours) {
      return `${round1(duration.hours)}h`
    }
    if (duration.days) {
      return `${round1(duration.days)}d`
    }
    if (duration.weeks) {
      return `${round1(duration.weeks)}w`
    }
    if (duration.months) {
      return `${round1(duration.months)}mth`
    }
    throw new Error(`Unknown period type: ${Object.keys(amount)[0]}`)
  }

  return (
    <ol className="flex flex-col gap-2">
      {options.map(({ icon, amount, title, verb }) => (
        <li key={icon} className="flex gap-2">
          <Label className="w-32 text-right">{title}</Label>
          <IconButton onClick={() => handleClick(amount)} className="w-full">
            {`${verb} (${formatAmount(amount)})`}
          </IconButton>
        </li>
      ))}
    </ol>
  )
}

TimeAdvance.propTypes = {
  options: PropTypes.array,
  applyTravelSpeed: PropTypes.bool,
  speed: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default TimeAdvance
