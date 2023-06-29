import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HexContext } from '../contexts/HexContext'
import useFetchHex from '../hooks/useFetchHex'
import H1 from '../components/atoms/H1'
import Placeholder from '../components/atoms/Placeholder'
import HexDetails from '../components/organisms/HexDetails'
import RegionDetails from '../components/organisms/RegionDetails'
import AdventureDetails from '../components/organisms/AdventureDetails'
import HexNavigation from '../components/organisms/HexNavigation'
import SettlementDetails from '../components/organisms/SettlementDetails'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'

const HexPage = () => {
  const navigate = useNavigate()
  const { reference: referenceParam } = useParams()
  const { reference, setReference } = useContext(HexContext)
  useEffect(() => {
    if (referenceParam) {
      if (reference !== referenceParam) {
        setReference(referenceParam)
      }
    } else if (reference) {
      navigate(`/${reference}`)
    }
  }, [navigate, reference, referenceParam, setReference])

  const hex = useFetchHex(reference)

  return (
    <>
      <H1>Hex</H1>
      <HexNavigation reference={reference} />
      {hex && <HexDetails hex={hex} />}
      {hex?.settlement && (
        <SettlementDetails
          settlement={hex.settlement}
          reference={hex.reference}
        />
      )}
      {hex?.region && !hex?.settlement && (
        <RegionDetails stubRegion={hex.region} id={hex.region.id} />
      )}
      {hex?.adventure && <AdventureDetails adventure={hex.adventure} />}
      {hex?.domain && <DomainDetails domain={hex.domain} faction={hex.domain.faction} />}
      {hex?.assets && <AssetList assets={hex.assets} />}
      {!hex && reference && (
        <Placeholder>No hex found with reference {reference}</Placeholder>
      )}
    </>
  )
}

export default HexPage
