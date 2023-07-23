import PropTypes from 'prop-types'
import Section from '../atoms/Section'
import Label from '../atoms/Label'
import LandmarkHiddenSecret from '../molecules/LandmarkHiddenSecret'
import SettlementDomainText from '../molecules/SettlementDomainText'

const HexDetails = ({ reference, hex, className }) => {
  const { region, domain, settlement } = hex

  return (
    <Section
      className={className}
      heading={
        <h1 className="flex gap-4">
          <Label>{reference}</Label>
          {region && <span>{region.name}</span>}
        </h1>
      }
    >
      <SettlementDomainText
        reference={reference}
        settlement={settlement}
        domain={domain}
      />
      {hex && <LandmarkHiddenSecret hex={hex} />}
    </Section>
  )
}

HexDetails.propTypes = {
  hex: PropTypes.object,
  reference: PropTypes.string,
  className: PropTypes.string,
}

export default HexDetails
