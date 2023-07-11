import { useFetchHex, useReference } from '../hooks/hexes'
import Placeholder from '../components/atoms/Placeholder'
import Label from '../components/atoms/Label'
import Link from '../components/atoms/Link'
import HexDetails from '../components/organisms/HexDetails'
import RegionDetails from '../components/organisms/RegionDetails'
import AdventureDetails from '../components/organisms/AdventureDetails'
import HexNavigation from '../components/organisms/HexNavigation'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'

const HexPage = () => {
  const reference = useReference()
  const { hex } = useFetchHex(reference)

  if (!reference) {
    return <Placeholder>Loading Hex</Placeholder>
  }
  if (!hex) {
    return <Placeholder>No hex found with reference {reference}</Placeholder>
  }

  const { settlement, region, adventure, domain, assets, npcs } = hex

  return (
    <>
      <section className="flex-col-reverse sm:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          <h1>
            <Label>{reference}</Label>
            {settlement && (
              <Link to={`/settlements/${reference}`}>{settlement.name}</Link>
            )}
          </h1>
          {hex && <HexDetails hex={hex} />}
        </div>
        <HexNavigation reference={reference} />
      </section>
      {(region || domain) && (
        <section>
          {domain && <DomainDetails domain={domain} faction={domain.faction} />}
          {region && <RegionDetails stubRegion={region} id={region.id} />}
        </section>
      )}
      {adventure && (
        <section>
          <AdventureDetails adventure={adventure} />
        </section>
      )}
      {assets && <AssetList assets={assets} />}
      {npcs && <NpcList npcs={npcs} />}
    </>
  )
}

export default HexPage
