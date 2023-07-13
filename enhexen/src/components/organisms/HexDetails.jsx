import PropTypes from 'prop-types'
import Section from '../atoms/Section'
import Label from '../atoms/Label'
import HexNavigation from '../molecules/HexNavigation'
import LandmarkHiddenSecret from '../molecules/LandmarkHiddenSecret'
import SettlementDomainText from '../molecules/SettlementDomainText'

const HexDetails = ({ reference, hex }) => {
  const { region, domain, settlement } = hex

  return (
    <Section
      heading={
        <h1 className="flex gap-4">
          <Label>{reference}</Label>
          {region && <span>{region.name}</span>}
        </h1>
      }
    >
      <div className="flex flex-col-reverse sm:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <SettlementDomainText
            reference={reference}
            settlement={settlement}
            domain={domain}
          />
          {hex && <LandmarkHiddenSecret hex={hex} />}
        </div>
        <HexNavigation reference={reference} />
      </div>
    </Section>
  )
}

HexDetails.propTypes = {
  hex: PropTypes.object,
  reference: PropTypes.string,
}

export default HexDetails
