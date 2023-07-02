import PropTypes from 'prop-types'
import OL from '../atoms/OL'
import LI from '../atoms/LI'
import Button from '../atoms/Button'

const total = (loot, type) =>
  loot.filter((x) => !type || x.type === type).reduce((a, c) => a + c.amount, 0)

const LootList = ({ loot, onDelete, onClaim }) => {
  const totalSp = total(loot, 'sp')
  const totalXp = total(loot)

  return (
    <OL>
      {loot && (
        <LI key="total">
          Total {totalSp}sp {totalXp}xp{' '}
          <Button onClick={() => onClaim({ sp: totalSp, xp: totalXp })}>
            Claim
          </Button>
        </LI>
      )}
      {loot?.map((loot) => (
        <LI key={loot.id}>
          {loot.name} {loot.amount} {loot.type}{' '}
          <Button onClick={() => onDelete(loot)}>X</Button>
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
