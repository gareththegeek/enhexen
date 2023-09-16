import PropTypes from 'prop-types'
import Section from '../atoms/Section'
import HexNavigation from '../molecules/HexNavigation'
import Label from '../atoms/Label'
import HexLookup from '../molecules/HexLookup'
import TimeControl from '../molecules/TimeControl'

const Navigation = ({ reference, hex, type, className }) => (
  <Section
    className={className}
    containerClassName="md:flex-row"
    heading={
      <h2 className="flex gap-4">
        <Label>{reference ?? 'Search for a hex'}</Label>
        {hex?.region && <span>{hex?.region.name}</span>}
      </h2>
    }
  >
    <div className="flex flex-col gap-8 w-full">
      {type === 'hexes' && <HexLookup labelWidth="w-28" />}
      <HexNavigation reference={reference} />
    </div>
    <TimeControl type={type} />
  </Section>
)

Navigation.propTypes = {
  reference: PropTypes.string,
  hex: PropTypes.object,
  type: PropTypes.string,
  className: PropTypes.string,
}

export default Navigation
