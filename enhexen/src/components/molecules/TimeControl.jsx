import { useContext, useEffect, useState } from 'react'
import { ClockContext } from '../../contexts/ClockContext'
import useClock from '../../hooks/clock'
import Clock from '../atoms/Clock'
import TimeAdvance from '../molecules/TimeAdvance'
import useCurrentPath from '../../hooks/useCurrentPath'
import { toDateTime } from '../../dates'
import TravelSpeed from '../molecules/TravelSpeed'

const timeAdvanceOptions = {
  hexes: [
    { icon: 'hex-normal', title: 'Normal', amount: { hours: 2 } },
    { icon: 'hex-hill', title: 'Hill/Wood', amount: { hours: 3 } },
    { icon: 'hex-swamp', title: 'Swamp/Mountain', amount: { hours: 4 } },
    { icon: 'hex-road', title: 'Road', amount: { minutes: 80 } },
  ],
  delve: [
    { icon: 'delve-turn', title: '1 Turn', amount: { minutes: 10 } },
    { icon: 'hour', title: '1 Hour', amount: { hours: 1 } },
    { icon: 'shift', title: '8 Hours', amount: { hours: 8 } },
    { icon: 'day', title: '1 Day', amount: { day: 1 } },
  ],
  factions: [
    { icon: 'hour', title: '1 Hour', amount: { hours: 1 } },
    { icon: 'shift', title: '8 Hours', amount: { hours: 8 } },
    { icon: 'day', title: '1 Day', amount: { days: 1 } },
    { icon: 'week', title: '1 Week', amount: { week: 1 } },
  ],
  settlement: [
    { icon: 'shift', title: '8 Hours', amount: { hours: 8 } },
    { icon: 'day', title: '1 Day', amount: { days: 1 } },
    { icon: 'week', title: '1 Week', amount: { week: 1 } },
    { icon: 'month', title: '1 Month', amount: { month: 1 } },
  ],
  npc: [
    { icon: 'hour', title: '1 Hour', amount: { hours: 1 } },
    { icon: 'shift', title: '8 Hours', amount: { hours: 8 } },
    { icon: 'day', title: '1 Day', amount: { days: 1 } },
    { icon: 'week', title: '1 Week', amount: { week: 1 } },
  ],
}

const TimeControl = () => {
  const { now, setNow } = useContext(ClockContext)
  const { now: nextNow } = useClock(!now)
  const [speed, setSpeed] = useState(60)

  useEffect(() => {
    if (!now && nextNow) {
      setNow(toDateTime(nextNow))
    }
  }, [nextNow, now, setNow])

  const route = useCurrentPath()
  const options = timeAdvanceOptions[route]

  return (
    <div className="flex gap-4">
      <TravelSpeed speed={speed} onChange={({ value }) => setSpeed(value)} />
      <div>
        <Clock value={now} />
        <TimeAdvance
          options={options}
          applyTravelSpeed={route === 'hexes'}
          speed={speed}
        />
      </div>
    </div>
  )
}

export default TimeControl
