import PropTypes from 'prop-types'
import { useFetchRegion } from '../../hooks/regions'
import H2 from '../atoms/H2'
import RandomTable from '../molecules/RandomTable'

const RegionDetails = ({ stubRegion, id }) => {
  const { region } = useFetchRegion(id)
  return (
    <section>
      <H2>{stubRegion.name}</H2>
      <RandomTable
        heading="Encounters"
        items={region?.encounters}
      ></RandomTable>
    </section>
  )
}

RegionDetails.propTypes = {
  stubRegion: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
}

export default RegionDetails
