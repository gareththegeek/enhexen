import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { ClockContext } from '../../contexts/ClockContext'
import useClock from '../../hooks/clock'
import TimeAdvance from '../molecules/TimeAdvance'
import { toDateTime } from '../../helpers/dates'
import TravelSpeed from '../molecules/TravelSpeed'

const timeAdvanceOptions = {
  hexes: [
    { icon: 'hex-normal', title: 'Normal', verb: 'Move', amount: { hours: 2 } },
    { icon: 'hex-hill', title: 'Hill', verb: 'Move', amount: { hours: 3 } },
    { icon: 'hex-wood', title: 'Wood', verb: 'Move', amount: { hours: 3 } },
    { icon: 'hex-swamp', title: 'Swamp', verb: 'Move', amount: { hours: 4 } },
    {
      icon: 'hex-mountain',
      title: 'Mountain',
      verb: 'Move',
      amount: { hours: 4 },
    },
    { icon: 'hex-road', title: 'Road', verb: 'Move', amount: { minutes: 80 } },
  ],
  delve: [
    {
      icon: 'delve-turn',
      title: '1 Turn',
      verb: 'Advance',
      amount: { minutes: 10 },
    },
    { icon: 'hour', title: '1 Hour', verb: 'Advance', amount: { hours: 1 } },
    { icon: 'shift', title: '8 Hours', verb: 'Advance', amount: { hours: 8 } },
    { icon: 'day', title: '1 Day', verb: 'Advance', amount: { day: 1 } },
  ],
  factions: [
    { icon: 'hour', title: '1 Hour', verb: 'Advance', amount: { hours: 1 } },
    { icon: 'shift', title: '8 Hours', verb: 'Advance', amount: { hours: 8 } },
    { icon: 'day', title: '1 Day', verb: 'Advance', amount: { days: 1 } },
    { icon: 'week', title: '1 Week', verb: 'Advance', amount: { week: 1 } },
  ],
  settlement: [
    { icon: 'shift', title: '8 Hours', verb: 'Stay', amount: { hours: 8 } },
    { icon: 'day', title: '1 Day', verb: 'Stay', amount: { days: 1 } },
    { icon: 'week', title: '1 Week', verb: 'Stay', amount: { week: 1 } },
    { icon: 'month', title: '1 Month', verb: 'Stay', amount: { month: 1 } },
  ],
}

const TimeControl = ({ type }) => {
  const { now, setNow } = useContext(ClockContext)
  const { now: nextNow } = useClock(!now)
  const [speed, setSpeed] = useState(60)

  useEffect(() => {
    if (!now && nextNow) {
      setNow(toDateTime(nextNow))
    }
  }, [nextNow, now, setNow])

  const options = timeAdvanceOptions[type]

  return (
    <div className="flex flex-col gap-8">
      {type === 'hexes' && (
        <TravelSpeed speed={speed} onChange={({ value }) => setSpeed(value)} />
      )}
      <TimeAdvance
        options={options}
        untilMorning={type === 'settlement'}
        applyTravelSpeed={type === 'hexes'}
        speed={speed}
      />
    </div>
  )
}

TimeControl.propTypes = {
  type: PropTypes.string.isRequired,
}

export default TimeControl
