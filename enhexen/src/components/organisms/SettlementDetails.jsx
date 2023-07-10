import PropTypes from 'prop-types'
import { putRumour, useFetchRumours } from '../../hooks/rumours'
import P from '../atoms/P'
import Field from '../molecules/Field'
import RandomTable from '../molecules/RandomTable'

const SettlementDetails = ({
  settlement: { marketClass },
  reference,
}) => {
  const { rumours } = useFetchRumours(reference)

  const handleRoll = ({ item }) => {
    putRumour({ ...item, done: true })
  }

  return (
    <>
      <Field name="market-class" label="Market Class">
        <P>{marketClass}</P>
      </Field>
      <RandomTable
        heading="Rumours"
        onRoll={handleRoll}
        items={rumours?.map(({ id, roll, text }) => ({
          id,
          roll,
          description: text,
        }))}
      />
    </>
  )
}

SettlementDetails.propTypes = {
  settlement: PropTypes.object,
  reference: PropTypes.string,
}

export default SettlementDetails
