import PropTypes from 'prop-types'
import Link from '../atoms/Link'
import Label from '../atoms/Label'
import Section from '../atoms/Section'
import SettlementDomainText from '../molecules/SettlementDomainText'
import Field from '../atoms/Field'
import SettlementSelect from './SettlementSelect'

const SettlementDetails = ({ reference, domain, settlement, className }) => (
  <Section
    className={className}
    heading={
      <h1 className="flex gap-4">
        <Label>{settlement.name}</Label>
        <Link to={`/${reference}`}>{reference}</Link>
      </h1>
    }
  >
    <SettlementSelect />
    <SettlementDomainText
      reference={reference}
      settlement={settlement}
      domain={domain}
    />
    {settlement && (
      <Field name="market-class" labelWidth="24" label="Market Class">
        <p>{settlement.marketClass}</p>
      </Field>
    )}
  </Section>
)

SettlementDetails.propTypes = {
  className: PropTypes.string,
  reference: PropTypes.string,
  settlement: PropTypes.object,
  domain: PropTypes.object,
}

export default SettlementDetails
