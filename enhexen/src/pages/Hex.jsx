import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import H1 from '../components/atoms/H1'
import HexLookup from '../components/organisms/HexLookup'
import HexDetails from '../components/organisms/HexDetails'
import RegionDetails from '../components/organisms/RegionDetails'
import AdventureDetails from '../components/organisms/AdventureDetails'
import P from '../components/atoms/P'

const Hex = () => {
  const [reference, setReference] = useState('')
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
      <HexLookup onSearch={handleSearch} />
      {hex && <HexDetails {...hex} />}
      {hex?.region && (
        <RegionDetails stubRegion={hex.region} id={hex.region.id} />
      )}
      {hex?.adventure && <AdventureDetails adventure={hex.adventure} />}
      {!hex && reference && <P>No hex found with reference {reference}</P>}
    </>
  )
}

export default Hex
