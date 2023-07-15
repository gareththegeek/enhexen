import PropTypes from 'prop-types'
import IconButton from '../atoms/IconButton'
import Placeholder from '../atoms/Placeholder'

const total = (loot, type) =>
  loot.filter((x) => !type || x.type === type).reduce((a, c) => a + c.amount, 0)

const LootList = ({ loot, onDelete, onClaim, claim = false }) => {
  const totalSp = total(loot, 'sp')
  const totalXp = total(loot)

  if (totalSp + totalXp === 0) {
    return <Placeholder>No loot yet..</Placeholder>
  }

  return (
    <ol className="flex flex-col gap-2">
      {loot && (
        <li key="total" className="flex gap-4 justify-between">
          Total {totalSp}sp {totalXp}xp
          <IconButton
            className="w-20"
            primary={claim}
            onClick={() => onClaim({ sp: totalSp, xp: totalXp })}
          >
            Claim
          </IconButton>
        </li>
      )}
      {loot?.map((loot) => (
        <li key={loot.id} className="flex gap-4 justify-between">
          <span className="flex gap-1">
            <span className="text-stone-600">{loot.name}</span>
            <span>{loot.amount}</span>
            <span className="text-stone-600">{loot.type}</span>
          </span>
          <IconButton className="w-20" onClick={() => onDelete(loot)}>
            Remove
          </IconButton>
        </li>
      ))}
    </ol>
  )
}

LootList.propTypes = {
  loot: PropTypes.array,
  onClaim: PropTypes.func,
  onDelete: PropTypes.func,
  claim: PropTypes.bool,
}

export default LootList
