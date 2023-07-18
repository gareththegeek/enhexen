import { useContext } from 'react'
import { Duration } from 'luxon'
import { usePublish } from '../hooks/pubsub'
import useClock from '../hooks/clock'
import { ClockContext } from '../contexts/ClockContext'
import EncounterRoll from '../components/molecules/EncounterRoll'
import Loot from '../components/organisms/Loot'
import Timers from '../components/organisms/Timers'
import Section from '../components/atoms/Section'
import ButtonHeading from '../components/molecules/ButtonHeading'

const DelvePage = () => {
  const { now, setNow } = useContext(ClockContext)
  const { putClock } = useClock()
  const publish = usePublish('CLOCK_CHANGE')

  const handleTurnClick = () => {
    const duration = Duration.fromObject({ minutes: 10 })
    const nextNow = now.plus(duration)
    setNow(nextNow)
    putClock(nextNow).then(publish({ duration }))
  }

  return (
    <>
      <Section
        heading={
          <ButtonHeading
            heading={<h1>Delve</h1>}
            button="Turn"
            primary
            handleClick={handleTurnClick}
          />
        }
      >
        <EncounterRoll />
      </Section>
      <div className="flex flex-col gap-8 md:flex-row">
        <Timers className="flex-1" />
        <Loot className="flex-1" />
      </div>
    </>
  )
}

export default DelvePage
