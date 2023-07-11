import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DomainDetails = ({ domain: { name }, faction }) => (
  <div className="flex flex-wrap gap-2">
    <h2>Domain {name}</h2>
    <p className="text-sm">
      (Controlled by <Link to={`/factions/${faction.id}`}>{faction.name})</Link>
    </p>
  </div>
)

DomainDetails.propTypes = {
  domain: PropTypes.object.isRequired,
  faction: PropTypes.object.isRequired,
}

export default DomainDetails
