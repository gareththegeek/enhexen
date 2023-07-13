import PropTypes from 'prop-types'
import { useFetchRegion } from '../../hooks/regions'
import RandomTable from '../molecules/RandomTable'

const EncounterTable = ({ id }) => {
  const { region } = useFetchRegion(id)
  return (
    <RandomTable
      heading="Random Encounter"
      placeholder="There are no worthy encounters to be found in this place!"
      items={region?.encounters}
    />
  )
}

EncounterTable.propTypes = {
  id: PropTypes.number.isRequired,
}

export default EncounterTable
