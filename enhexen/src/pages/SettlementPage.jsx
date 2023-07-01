import useReference from '../hooks/useReference'
import useFetchHex from '../hooks/useFetchHex'
import H1 from '../components/atoms/H1'
import Link from '../components/atoms/Link'
import P from '../components/atoms/P'
import SettlementDetails from '../components/organisms/SettlementDetails'
import Placeholder from '../components/atoms/Placeholder'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'

const SettlementPage = () => {
  const reference = useReference('/settlements')

  const { hex } = useFetchHex(reference)

  return (
    <>
      <H1>Settlement</H1>
      {hex && (
        <P>
          Hex <Link to={`/${hex.reference}`}>{hex.reference}</Link>
        </P>
      )}
      {hex?.settlement && (
        <SettlementDetails
          settlement={hex.settlement}
          reference={hex.reference}
        />
      )}
      {hex?.domain && (
        <DomainDetails domain={hex.domain} faction={hex.domain.faction} />
      )}
      {hex?.assets && <AssetList assets={hex.assets} />}
      {hex?.npcs && <NpcList npcs={hex.npcs} />}
      {!hex && reference && (
        <Placeholder>No hex found with reference {reference}</Placeholder>
      )}
      {!hex && <Placeholder>No Settlement</Placeholder>}
    </>
  )
}

export default SettlementPage
