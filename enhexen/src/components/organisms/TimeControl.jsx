import { useContext, useEffect } from 'react'
import { ClockContext } from '../../contexts/ClockContext'
import useFetchClock from '../../hooks/useFetchClock'
import { DateTime } from 'luxon'
import Clock from '../atoms/Clock'
import TimeAdvance from '../molecules/TimeAdvance'
import useCurrentPath from '../../hooks/useCurrentPath'

const timeAdvanceOptions = {
  hexes: [
    { icon: 'hex-normal', label: 'Normal', amount: { hours: 2 } },
    { icon: 'hex-hill-wood', label: 'Hill/Wood', amount: { hours: 3 } },
    {
      icon: 'hex-swamp-mtn',
      label: 'Swamp/Mountain',
      amount: { hours: 4 },
    },
    { icon: 'hex-road', label: 'Road', amount: { minutes: 80 } },
  ],
  delve: [
    { icon: 'delve-turn', label: 'Turn', amount: { minutes: 10 } },
    { icon: 'hour', label: 'Hour', amount: { hours: 1 } },
    { icon: 'shift', label: '8 Hours', amount: { hours: 8 } },
    { icon: 'day', label: 'Day', amount: { day: 1 } },
  ],
  factions: [
    { icon: 'hour', label: 'Hour', amount: { hours: 1 } },
    { icon: 'shift', label: '8 Hours', amount: { hours: 8 } },
    { icon: 'day', label: 'Day', amount: { days: 1 } },
    { icon: 'week', label: 'Week', amount: { week: 1 } },
  ],
}

const TimeControl = () => {
  const { now, setNow } = useContext(ClockContext)
  const nextNow = useFetchClock(!now)

  useEffect(() => {
    if (!now && nextNow) {
      setNow(DateTime.fromISO(nextNow))
    }
  }, [nextNow, now, setNow])

  const route = useCurrentPath()
  const options = timeAdvanceOptions[route]

  return (
    <div>
      <Clock value={now} />
      <TimeAdvance options={options} applyTravelSpeed={route === 'hexes'} />
    </div>
  )
}

export default TimeControl
