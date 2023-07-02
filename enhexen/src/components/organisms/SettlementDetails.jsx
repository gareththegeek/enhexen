import PropTypes from 'prop-types'
import { putRumour, useFetchRumours } from '../../hooks/rumours'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import Field from '../molecules/Field'
import RandomTable from '../molecules/RandomTable'

const SettlementDetails = ({
  settlement: { name, marketClass },
  reference,
}) => {
  const { rumours } = useFetchRumours(reference)

  const handleRoll = ({ item }) => {
    putRumour({ ...item, done: true })
  }

  return (
    <section>
      <H2>{name}</H2>
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
    </section>
  )
}

SettlementDetails.propTypes = {
  settlement: PropTypes.object,
  reference: PropTypes.string,
}

export default SettlementDetails
