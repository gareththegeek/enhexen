import { useFetchHex, useReference } from '../hooks/hexes'
import H1 from '../components/atoms/H1'
import Placeholder from '../components/atoms/Placeholder'
import P from '../components/atoms/P'
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

  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-4">
          <div>
            <H1>Hex {hex?.reference}</H1>
            {hex?.settlement && (
              <P>
                Settlement&nbsp;
                <Link to={`/settlements/${hex.reference}`}>
                  {hex.settlement.name}
                </Link>
              </P>
            )}
          </div>
          {hex && <HexDetails hex={hex} />}
        </div>
        <HexNavigation reference={reference} />
      </div>
      <div className="flex flex-col gap-4">
        {hex?.region && (
          <RegionDetails stubRegion={hex.region} id={hex.region.id} />
        )}
        {hex?.adventure && <AdventureDetails adventure={hex.adventure} />}
        {hex?.domain && (
          <DomainDetails domain={hex.domain} faction={hex.domain.faction} />
        )}
        {hex?.assets && <AssetList assets={hex.assets} />}
        {hex?.npcs && <NpcList npcs={hex.npcs} />}
        {!hex && reference && (
          <Placeholder>No hex found with reference {reference}</Placeholder>
        )}
      </div>
    </>
  )
}

export default HexPage
