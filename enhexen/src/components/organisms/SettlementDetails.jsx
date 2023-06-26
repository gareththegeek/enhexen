import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import Field from '../molecules/Field'
import P from '../atoms/P'

const SettlementDetails = ({ settlement: { name, marketClass } }) => (
  <section>
    <H2>{name}</H2>
    <Field name="market-class" label="Market Class">
      <P>{marketClass}</P>
    </Field>
  </section>
)

SettlementDetails.propTypes = {
  settlement: PropTypes.object,
}

export default SettlementDetails
