import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Duration } from 'luxon'
import { putClock } from '../../hooks/clock'
import { usePublish } from '../../hooks/pubsub'
import { ClockContext } from '../../contexts/ClockContext'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Field from './Field'

const explorationToWildernessSpeedQuotient = 5
const standardHexesPerDay = 12

const TimeAdvance = ({ options, applyTravelSpeed }) => {
  const [speed, setSpeed] = useState(60)
  const { now, setNow } = useContext(ClockContext)
  const publish = usePublish('CLOCK_CHANGE')

  const handleClick = (amount) => {
    const travelFactor = applyTravelSpeed
      ? (explorationToWildernessSpeedQuotient * standardHexesPerDay) / speed
      : 1
    const duration = Duration.fromObject(amount).mapUnits(
      (x) => x * travelFactor
    )
    const nextNow = now.plus(duration)

    setNow(nextNow)
    putClock(nextNow).then(publish({ duration }))
  }

  return (
    <>
      <Field label="Speed" name="speed">
        <Input
          type="number"
          onChange={(value) => setSpeed(value)}
          value={speed}
        />
      </Field>
      <OL className="flex gap-2">
        {options.map(({ icon, label, amount }) => (
          <LI key={icon}>
            <Button onClick={() => handleClick(amount)}>{label}</Button>
          </LI>
        ))}
      </OL>
    </>
  )
}

TimeAdvance.propTypes = {
  options: PropTypes.array,
  applyTravelSpeed: PropTypes.bool,
}

export default TimeAdvance
