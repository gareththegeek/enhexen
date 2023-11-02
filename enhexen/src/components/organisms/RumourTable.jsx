import PropTypes from 'prop-types'
import { usePutRumour, useFetchRumours } from '../../hooks/rumours'
import RandomTable from '../molecules/RandomTable'

const RumourTable = ({ reference, className }) => {
  const { rumours } = useFetchRumours(reference)
  const putRumour = usePutRumour()

  const handleRoll = ({ item }) => {
    putRumour({ ...item, done: true })
  }

  return (
    <RandomTable
      className={className}
      onRoll={handleRoll}
      heading="Rumour"
      placeholder="There are no credible rumours in this place only idle gossip"
      includeParent
      items={rumours?.map(({ id, roll, text, adventure }) => ({
        id,
        roll,
        description: text,
        parent: adventure.name,
      }))}
    />
  )
}

RumourTable.propTypes = {
  className: PropTypes.string,
  reference: PropTypes.string.isRequired,
}

export default RumourTable
