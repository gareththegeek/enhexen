import PropTypes from 'prop-types'
import Link from '../atoms/Link'

const SettlementDomainText = ({ reference, settlement, domain }) => {
  if (!settlement && !domain) {
    return <></>
  }

  const faction = domain?.faction

  return (
    <p>
      {settlement && 'Here lies the settlement of '}
      {settlement && (
        <Link to={`/settlements/${reference}`}>{settlement.name}</Link>
      )}
      {settlement && domain ? ' l' : domain && 'L'}
      {domain &&
        `ocated within the domain of ${domain.name} which is controlled by `}
      {faction && <Link to={`/factions/${faction.id}`}>{faction.name}</Link>}
    </p>
  )
}

SettlementDomainText.propTypes = {
  reference: PropTypes.string.isRequired,
  settlement: PropTypes.object,
  domain: PropTypes.object,
  faction: PropTypes.object,
}

export default SettlementDomainText
