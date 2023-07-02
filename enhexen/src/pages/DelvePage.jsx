import H1 from '../components/atoms/H1'
import EncounterRoll from '../components/organisms/EncounterRoll'
import Loot from '../components/organisms/Loot'
import Timers from '../components/organisms/Timers'

const DelvePage = () => (
  <>
    <H1>Delve</H1>
    <EncounterRoll />
    <Timers />
    <Loot />
  </>
)

export default DelvePage
