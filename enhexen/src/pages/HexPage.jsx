import { useFetchHex, useReference } from '../hooks/hexes'
import Section from '../components/atoms/Section'
import HexDetails from '../components/organisms/HexDetails'
import EncounterTable from '../components/organisms/EncounterTable'
import AdventureDetails from '../components/organisms/AdventureDetails'
import AssetList from '../components/organisms/AssetList'
import NpcTable from '../components/organisms/NpcTable'
import HexLookup from '../components/molecules/HexLookup'
import HexNavigation from '../components/molecules/HexNavigation'

const HexPage = () => {
  const reference = useReference()
  const { hex } = useFetchHex(reference)

  if (!reference) {
    return (
      <Section heading={<h1>Search for a hex</h1>}>
        <HexLookup labelWidth="w-96" />
      </Section>
    )
  }
  if (!hex) {
    return (
      <Section heading={<h1>{reference}</h1>}>
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-8">
          <p>No hex found with reference {reference}</p>
          <HexNavigation reference={reference} />
        </div>
      </Section>
    )
  }

  const { region, adventure, assets, npcs } = hex

  return (
    <>
      <HexDetails reference={reference} hex={hex} />
      {adventure && <AdventureDetails adventure={adventure} />}
      {region && <EncounterTable id={region.id} />}
      <div className="flex flex-col md:flex-row gap-8">
        {assets && <AssetList className="flex-1" assets={assets} />}
        {npcs && <NpcTable className="flex-1" npcs={npcs} />}
      </div>
    </>
  )
}

export default HexPage
