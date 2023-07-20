import { useContext } from 'react'
import { Duration } from 'luxon'
import { usePublish } from '../hooks/pubsub'
import useClock from '../hooks/clock'
import { ClockContext } from '../contexts/ClockContext'
import EncounterRoll from '../components/molecules/EncounterRoll'
import LootTable from '../components/organisms/LootTable'
import TimersTable from '../components/organisms/TimersTable'
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
        <TimersTable className="flex-1" />
        <LootTable className="flex-1" />
      </div>
    </>
  )
}

export default DelvePage
