import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import { Link } from 'react-router-dom'

const DomainDetails = ({ domain: { name }, faction }) => (
  <section>
    <H2>Domain</H2>
    <P>{name}</P>
    <Link to={`/factions/${faction.id}`}>{faction.name}</Link>
  </section>
)

DomainDetails.propTypes = {
  domain: PropTypes.object.isRequired,
  faction: PropTypes.object.isRequired
}

export default DomainDetails
