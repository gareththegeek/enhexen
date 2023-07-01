import useFetchHex from '../hooks/useFetchHex'
import useReference from '../hooks/useReference'
import H1 from '../components/atoms/H1'
import Placeholder from '../components/atoms/Placeholder'
import HexDetails from '../components/organisms/HexDetails'
import RegionDetails from '../components/organisms/RegionDetails'
import AdventureDetails from '../components/organisms/AdventureDetails'
import HexNavigation from '../components/organisms/HexNavigation'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'
import P from '../components/atoms/P'
import Link from '../components/atoms/Link'

const HexPage = () => {
  const reference = useReference()

  const hex = useFetchHex(reference)

  return (
    <>
      <H1>Hex</H1>
      <HexNavigation reference={reference} />
      {hex?.settlement && (
        <P>
          Settlement
          <Link to={`/settlements/${hex.reference}`}>
            {hex.settlement.name}
          </Link>
        </P>
      )}
      {hex && <HexDetails hex={hex} />}
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
    </>
  )
}

export default HexPage
