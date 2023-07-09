import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import { Link } from 'react-router-dom'
import P from '../atoms/P'

const DomainDetails = ({ domain: { name }, faction }) => (
  <div className="flex flex-wrap gap-2">
    <H2>Domain {name}</H2>
    <P>
      (Controlled by <Link to={`/factions/${faction.id}`}>{faction.name})</Link>
    </P>
  </div>
)

DomainDetails.propTypes = {
  domain: PropTypes.object.isRequired,
  faction: PropTypes.object.isRequired,
}

export default DomainDetails
