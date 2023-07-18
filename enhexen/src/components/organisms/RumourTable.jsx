import PropTypes from 'prop-types'
import { usePutRumour, useFetchRumours } from '../../hooks/rumours'
import RandomTable from '../molecules/RandomTable'

const RumourTable = ({ reference }) => {
  const { rumours } = useFetchRumours(reference)
  const putRumour = usePutRumour()

  const handleRoll = ({ item }) => {
    putRumour({ ...item, done: true })
  }

  return (
    <RandomTable
      onRoll={handleRoll}
      heading="Rumour"
      placeholder="There are no credible rumours in this place only idle gossip"
      items={rumours?.map(({ id, roll, text }) => ({
        id,
        roll,
        description: text,
      }))}
    />
  )
}

RumourTable.propTypes = {
  reference: PropTypes.string.isRequired,
}

export default RumourTable
