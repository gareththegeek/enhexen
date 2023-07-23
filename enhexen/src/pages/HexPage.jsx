import { useFetchHex, useReference } from '../hooks/hexes'
import Section from '../components/atoms/Section'
import HexDetails from '../components/organisms/HexDetails'
import EncounterTable from '../components/organisms/EncounterTable'
import AdventureDetails from '../components/organisms/AdventureDetails'
import AssetList from '../components/organisms/AssetList'
import NpcTable from '../components/organisms/NpcTable'
import Navigation from '../components/organisms/Navigation'
import Placeholder from '../components/atoms/Placeholder'
import SidebySide from '../components/atoms/SideBySide'

const HexPage = () => {
  const reference = useReference()
  const { hex } = useFetchHex(reference)

  if (!reference || !hex) {
    return (
      <SidebySide>
        <Section
          containerClassName="items-center"
          heading={<h1>{reference ?? 'Hex'} not found</h1>}
        >
          <Placeholder>No hex found with reference {reference}</Placeholder>
        </Section>
        <Navigation reference={reference} type="hexes" />
      </SidebySide>
    )
  }

  const { region, adventure, assets, npcs } = hex

  return (
    <>
      <SidebySide>
        <HexDetails className="flex-2" reference={reference} hex={hex} />
        <Navigation
          className="flex-1"
          reference={reference}
          hex={hex}
          type="hexes"
        />
      </SidebySide>
      {adventure && <AdventureDetails adventure={adventure} />}
      {region && <EncounterTable id={region.id} />}
      <SidebySide>
        {assets && <AssetList className="flex-1" assets={assets} />}
        {npcs && <NpcTable className="flex-1" npcs={npcs} />}
      </SidebySide>
    </>
  )
}

export default HexPage
