import EncounterRoll from '../components/molecules/EncounterRoll'
import Loot from '../components/organisms/Loot'
import Timers from '../components/organisms/Timers'
import Section from '../components/atoms/Section'

const DelvePage = () => (
  <>
    <Section heading={<h1>Delve</h1>}>
      <EncounterRoll />
    </Section>
    <div className="flex flex-col gap-8 md:flex-row">
      <Timers className="flex-1" />
      <Loot className="flex-1" />
    </div>
  </>
)

export default DelvePage
