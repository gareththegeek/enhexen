import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import H1 from '../components/atoms/H1'
import Placeholder from '../components/atoms/Placeholder'
import HexLookup from '../components/organisms/HexLookup'
import HexDetails from '../components/organisms/HexDetails'
import RegionDetails from '../components/organisms/RegionDetails'
import AdventureDetails from '../components/organisms/AdventureDetails'
import HexNavigation from '../components/organisms/HexNavigation'

const HexPage = () => {
  const { reference: referenceParam } = useParams()
  const [reference, setReference] = useState(referenceParam)
  if (reference !== referenceParam && referenceParam) {
    setReference(referenceParam)
  }

  const hex = useFetch(
    `hexes?populate=region&populate=adventure&filters[reference]=${reference}`,
    reference
  )

  //TODO permissions - currently user is unauthenticated - do I care? hmm
  const handleSearch = (nextReference) => {
    setReference(nextReference)
  }

  return (
    <>
      <H1>Hex</H1>
      <HexNavigation reference={reference} />
      <HexLookup onSearch={handleSearch} />
      {hex && <HexDetails {...hex} />}
      {hex?.region && (
        <RegionDetails stubRegion={hex.region} id={hex.region.id} />
      )}
      {hex?.adventure && <AdventureDetails adventure={hex.adventure} />}
      {!hex && reference && (
        <Placeholder>No hex found with reference {reference}</Placeholder>
      )}
    </>
  )
}

export default HexPage
