import PropTypes from 'prop-types'
import ButtonLink from '../atoms/ButtonLink'
import Stat from '../atoms/Stat'

const Asset = ({
  asset,
  asset: { name, hp, maxHp, attack, counter, qualities, hex },
  faction,
  showHex = false,
}) => {
  const effectiveFaction = faction ?? asset.faction
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span>{name}</span>
        {showHex && hex && (
          <span>
            <ButtonLink to={`/${hex.reference}`}>{hex.reference}</ButtonLink>
          </span>
        )}
        {!showHex && effectiveFaction && (
          <span>
            <ButtonLink to={`/factions/${effectiveFaction.id}`}>
              {effectiveFaction.name}
            </ButtonLink>
          </span>
        )}
      </div>
      <div className="flex gap-4 text-sm text-grey-600 flex-wrap">
        <Stat label="❤️" title="Hitpoints">{`${hp}/${maxHp}`}</Stat>
        {attack !== '-' && <Stat label="🗡️" title="Attack">{attack}</Stat>}
        {counter !== '-' && <Stat label="🛡️" title="Counter">{counter}</Stat>}
        <Stat label="💎" title="Qualitites">{qualities}</Stat>
      </div>
    </div>
  )
}

Asset.propTypes = {
  asset: PropTypes.object.isRequired,
  faction: PropTypes.object,
  showHex: PropTypes.bool,
}

export default Asset
