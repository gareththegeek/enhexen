import PropTypes from 'prop-types'
import { putClock } from '../../hooks/clock'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import Button from '../atoms/Button'
import { ClockContext } from '../../contexts/ClockContext'
import { useContext, useState } from 'react'
import { Duration } from 'luxon'
import Field from './Field'
import Input from '../atoms/Input'

const explorationToWildernessSpeedQuotient = 5
const standardHexesPerDay = 12

const TimeAdvance = ({ options, applyTravelSpeed }) => {
  const [speed, setSpeed] = useState(60)
  const { now, setNow } = useContext(ClockContext)

  const handleClick = (amount) => {
    const travelFactor = applyTravelSpeed
      ? (explorationToWildernessSpeedQuotient * standardHexesPerDay) / speed
      : 1
    const nextNow = now.plus(
      Duration.fromObject(amount).mapUnits((x) => x * travelFactor)
    )

    setNow(nextNow)
    putClock(nextNow)
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
