import { useFetchHex, useReference } from '../hooks/hexes'
import Section from '../components/atoms/Section'
import HexDetails from '../components/organisms/HexDetails'
import EncounterTable from '../components/organisms/EncounterTable'
import AdventureDetails from '../components/organisms/AdventureDetails'
import AssetList from '../components/organisms/AssetList'
import NpcTable from '../components/organisms/NpcTable'
import HexLookup from '../components/molecules/HexLookup'

const HexPage = () => {
  const reference = useReference()
  const { hex } = useFetchHex(reference)

  if (!reference) {
    return (
      <Section heading={<h1>Search for a hex</h1>}>
        <HexLookup width="w-96" />
      </Section>
    )
  }
  if (!hex) {
    return (
      <Section heading={<h1>{reference}</h1>}>
        No hex found with reference {reference}
      </Section>
    )
  }

  const { region, adventure, assets, npcs } = hex

  return (
    <>
      <HexDetails reference={reference} hex={hex} />
      {adventure && <AdventureDetails adventure={adventure} />}
      {region && <EncounterTable id={region.id} />}
      {assets && <AssetList assets={assets} />}
      {npcs && <NpcTable npcs={npcs} />}
    </>
  )
}

export default HexPage
