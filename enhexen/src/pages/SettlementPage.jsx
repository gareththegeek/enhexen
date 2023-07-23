import { Navigate } from 'react-router-dom'
import { useFetchHex, useReference } from '../hooks/hexes'
import SettlementDetails from '../components/organisms/SettlementDetails'
import AssetList from '../components/organisms/AssetList'
import NpcTable from '../components/organisms/NpcTable'
import LootTable from '../components/organisms/LootTable'
import RumourTable from '../components/organisms/RumourTable'
import Navigation from '../components/organisms/Navigation'
import SidebySide from '../components/atoms/SideBySide'

const SettlementPage = () => {
  const reference = useReference('/settlements')

  const { hex } = useFetchHex(reference)

  if (!hex?.settlement) {
    console.log('Navigate', `/${reference ?? ''}`)
    return <Navigate to={`/${reference ?? ''}`} />
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
        {settlement && <LootTable className="flex-1" claim />}
      </SidebySide>
      <SidebySide>
        {assets && <AssetList className="flex-1" assets={assets} />}
        {npcs && <NpcTable className="flex-1" npcs={npcs} />}
      </SidebySide>
    </>
  )
}

export default SettlementPage
