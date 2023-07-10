import H1 from '../components/atoms/H1'
import EncounterRoll from '../components/organisms/EncounterRoll'
import Loot from '../components/organisms/Loot'
import Timers from '../components/organisms/Timers'

const DelvePage = () => (
  <>
    <section>
      <H1>Delve</H1>
      <EncounterRoll />
    </section>
    <div className="flex flex-col gap-8 md:flex-row">
      <section className="flex-1">
        <Timers />
      </section>
      <section className="flex-1">
        <Loot />
      </section>
    </div>
  </>
)

export default DelvePage
