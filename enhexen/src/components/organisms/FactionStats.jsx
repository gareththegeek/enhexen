import PropTypes from 'prop-types'
import Stat from '../atoms/Stat'

const FactionStats = ({
  faction: { cunning, force, wealth, income, magic, treasure, hitPoints },
}) => (
  <div className="flex gap-4">
    <Stat label="🥷" title="Cunning">{cunning}</Stat>
    <Stat label="💪" title="Force">{force}</Stat>
    <Stat label="🪙" title="Wealth">{wealth}</Stat>
    <Stat label="💰" title="Income">{income}</Stat>
    <Stat label="🪄" title="Magic">{magic}</Stat>
    <Stat label="👑" title="Treasure">{treasure}</Stat>
    <Stat label="❤️" title="Hitpoints">{hitPoints}</Stat>
  </div>
)

FactionStats.propTypes = {
  faction: PropTypes.object.isRequired,
}

export default FactionStats
