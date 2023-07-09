import PropTypes from 'prop-types'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import IconButton from '../atoms/IconButton'
import Placeholder from '../atoms/Placeholder'

const total = (loot, type) =>
  loot.filter((x) => !type || x.type === type).reduce((a, c) => a + c.amount, 0)

const LootList = ({ loot, onDelete, onClaim }) => {
  const totalSp = total(loot, 'sp')
  const totalXp = total(loot)

  if (totalSp + totalXp === 0) {
    return <Placeholder>No loot yet..</Placeholder>
  }

  return (
    <OL className="flex flex-col gap-2">
      {loot && (
        <LI key="total" className="flex gap-4 justify-between sm:justify-start">
          Total {totalSp}sp {totalXp}xp
          <IconButton onClick={() => onClaim({ sp: totalSp, xp: totalXp })}>
            Claim
          </IconButton>
        </LI>
      )}
      {loot?.map((loot) => (
        <LI key={loot.id} className="flex gap-4 justify-between sm:justify-start">
          {loot.name} {loot.amount} {loot.type}
          <IconButton onClick={() => onDelete(loot)}>Remove</IconButton>
        </LI>
      ))}
    </OL>
  )
}

LootList.propTypes = {
  loot: PropTypes.array,
  onClaim: PropTypes.func,
  onDelete: PropTypes.func,
}

export default LootList