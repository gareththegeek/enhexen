import { useContext } from 'react'
import { Duration } from 'luxon'
import { usePublish } from '../hooks/pubsub'
import useClock from '../hooks/clock'
import { ClockContext } from '../contexts/ClockContext'
import EncounterRoll from '../components/molecules/EncounterRoll'
import Section from '../components/atoms/Section'
import SidebySide from '../components/atoms/SideBySide'
import ButtonHeading from '../components/molecules/ButtonHeading'
import TimeControl from '../components/molecules/TimeControl'
import Loot from '../components/organisms/Loot'
import Timers from '../components/organisms/Timers'

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
        containerClassName="flex flex-col md:flex-row justify-between"
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
        <TimeControl type="delve" />
      </Section>
      <SidebySide>
        <Timers className="flex-1" />
        <Loot className="flex-1" />
      </SidebySide>
    </>
  )
}

export default DelvePage
