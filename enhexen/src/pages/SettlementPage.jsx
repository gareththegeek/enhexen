import { useFetchHex, useReference } from '../hooks/hexes'
import SettlementDetails from '../components/organisms/SettlementDetails'
import AssetList from '../components/organisms/AssetList'
import NpcTable from '../components/organisms/NpcTable'
import RumourTable from '../components/organisms/RumourTable'
import Navigation from '../components/organisms/Navigation'
import SidebySide from '../components/atoms/SideBySide'
import SettlementSelect from '../components/organisms/SettlementSelect'
import Section from '../components/atoms/Section'
import Loot from '../components/organisms/Loot'

const SettlementPage = () => {
  const reference = useReference('/settlements')

  const { hex } = useFetchHex(reference)

  if (!hex?.settlement) {
    return (
      <Section heading={<h2>Select Settlement</h2>}>
        <SettlementSelect />
      </Section>
    )
  }

  const { settlement, domain, assets, npcs } = hex

  return (
    <>
      <SidebySide>
        <SettlementDetails
          className="flex-2"
          reference={reference}
          settlement={settlement}
          domain={domain}
        />
        <Navigation
          className="flex-1"
          reference={reference}
          hex={hex}
          type="settlement"
        />
      </SidebySide>
      <SidebySide>
        {settlement && <RumourTable className="flex-2" reference={reference} />}
        {settlement && <Loot className="flex-1" />}
      </SidebySide>
      <SidebySide>
        {assets && <AssetList className="flex-1" assets={assets} />}
        {npcs && <NpcTable className="flex-1" npcs={npcs} />}
      </SidebySide>
    </>
  )
}

export default SettlementPage
