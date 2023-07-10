import { useFetchHex, useReference } from '../hooks/hexes'
import H1 from '../components/atoms/H1'
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
          <H1>
            <Label>{reference}</Label>
            {settlement && (
              <Link to={`/settlements/${reference}`}>{settlement.name}</Link>
            )}
          </H1>
          {hex && <HexDetails hex={hex} />}
        </div>
        <HexNavigation reference={reference} />
      </section>
      {region && (
        <section>
          <RegionDetails stubRegion={region} id={region.id} />
        </section>
      )}
      <section>
        {adventure && <AdventureDetails adventure={adventure} />}
      </section>
      <section>
        {domain && <DomainDetails domain={domain} faction={domain.faction} />}
        {assets && <AssetList assets={assets} />}
        {npcs && <NpcList npcs={npcs} />}
      </section>
    </>
  )
}

export default HexPage
