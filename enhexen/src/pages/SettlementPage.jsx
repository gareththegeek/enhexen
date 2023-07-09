import { useFetchHex, useReference } from '../hooks/hexes'
import H1 from '../components/atoms/H1'
import Link from '../components/atoms/Link'
import P from '../components/atoms/P'
import Placeholder from '../components/atoms/Placeholder'
import SettlementDetails from '../components/organisms/SettlementDetails'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'
import Loot from '../components/organisms/Loot'
import Label from '../components/atoms/Label'

const SettlementPage = () => {
  const reference = useReference('/settlements')

  const { hex } = useFetchHex(reference)

  if (!hex?.settlement) {
    return <Placeholder>No Settlement</Placeholder>
  }

  const { settlement, domain, assets, npcs } = hex

  return (
    <>
      <section>
        <H1>
          <Label>{settlement.name}</Label>
          {hex && <Link to={`/${reference}`}>{reference}</Link>}
        </H1>
        {settlement && (
          <SettlementDetails settlement={settlement} reference={reference} />
        )}
      </section>
      {settlement && <Loot />}
      <section>
        {domain && <DomainDetails domain={domain} faction={domain.faction} />}
        {assets && <AssetList assets={assets} />}
        {npcs && <NpcList npcs={npcs} />}
      </section>
    </>
  )
}

export default SettlementPage
