import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import RandomTable from '../molecules/RandomTable'
import useFetch from '../../hooks/useFetch'

const RegionDetails = ({ stubRegion, id }) => {
  const region = useFetch(`regions/${id}?populate=encounters`)
  return (
    <section>
      <H2>{stubRegion.name}</H2>
      <RandomTable items={region?.encounters}></RandomTable>
    </section>
  )
}

RegionDetails.propTypes = {
  stubRegion: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
}

export default RegionDetails
