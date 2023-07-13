import { useFetchHex, useReference } from '../hooks/hexes'
import Section from '../components/atoms/Section'
import SettlementDetails from '../components/organisms/SettlementDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'
import Loot from '../components/organisms/Loot'
import RumourTable from '../components/organisms/RumourTable'

const SettlementPage = () => {
  const reference = useReference('/settlements')

  const { hex } = useFetchHex(reference)

  if (!hex?.settlement) {
    return <Section>No Settlement</Section>
  }

  const { settlement, domain, assets, npcs } = hex

  return (
    <>
      <SettlementDetails
        reference={reference}
        settlement={settlement}
        domain={domain}
      />
      {settlement && <RumourTable reference={reference} />}
      {settlement && <Loot />}
      {assets && <AssetList assets={assets} />}
      {npcs && <NpcList npcs={npcs} />}
    </>
  )
}

export default SettlementPage
