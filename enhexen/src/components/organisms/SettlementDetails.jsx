import PropTypes from 'prop-types'
import Link from '../atoms/Link'
import Label from '../atoms/Label'
import Section from '../atoms/Section'
import SettlementDomainText from '../molecules/SettlementDomainText'
import Field from '../atoms/Field'
import HexNavigation from '../molecules/HexNavigation'

const SettlementDetails = ({ reference, domain, settlement }) => (
  <Section
    horizontal
    heading={
      <h1 className="flex gap-4">
        <Label>{settlement.name}</Label>
        <Link to={`/${reference}`}>{reference}</Link>
      </h1>
    }
  >
    <div className="flex flex-col gap-4">
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
    </div>
    <HexNavigation reference={reference} />
  </Section>
)

SettlementDetails.propTypes = {
  reference: PropTypes.string,
  settlement: PropTypes.object,
  domain: PropTypes.object,
}

export default SettlementDetails
