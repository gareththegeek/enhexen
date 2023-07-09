import PropTypes from 'prop-types'
import { useFetchRegion } from '../../hooks/regions'
import RandomTable from '../molecules/RandomTable'

const RegionDetails = ({ stubRegion, id }) => {
  const { region } = useFetchRegion(id)
  return <RandomTable heading={`${stubRegion.name} Encounters`} items={region?.encounters} />
}

RegionDetails.propTypes = {
  stubRegion: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
}

export default RegionDetails
