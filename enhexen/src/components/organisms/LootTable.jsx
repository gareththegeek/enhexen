import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDeleteLoot, usePostLoot, useFetchLoot } from '../../hooks/loot'
import Table from '../atoms/Table'
import AddLoot from '../organisms/AddLoot'
import TableHeadingButton from '../atoms/TableHeadingButton'
import Placeholder from '../atoms/Placeholder'
import Button from '../atoms/Button'
import Section from '../atoms/Section'

const renderLoot = (loot, onDelete) =>
  loot.map((l) => (
    <tr key={l.id}>
      <td>{l.name}</td>
      <td className="text-right">{l.type === 'gp' && l.amount}</td>
      <td className="text-right">{l.amount}</td>
      <td>
        <Button onClick={onDelete}>Delete</Button>
      </td>
    </tr>
  ))

const total = (loot, type) =>
  loot
    ?.filter((x) => !type || x.type === type)
    .reduce((a, c) => a + c.amount, 0)

const LootTable = ({ className, claim = false }) => {
  const [showAdd, setShowAdd] = useState(false)
  const { loot, mutateLoot } = useFetchLoot()
  const deleteLoot = useDeleteLoot()
  const postLoot = usePostLoot()

  const totalGp = total(loot, 'gp')
  const totalXp = total(loot)

  if (totalGp + totalXp === 0) {
    return (
      <Section heading={<h2>Loot</h2>} className={className}>
        <Placeholder>No loot yet..</Placeholder>
      </Section>
    )
  }

  const handleAddClick = () => {
    setShowAdd(!showAdd)
  }

  const handleCancelClick = () => {
    setShowAdd(false)
  }

  const handleSaveClick = (loot) => {
    setShowAdd(false)
    postLoot(loot).then(mutateLoot)
  }

  const handleDeleteClick = (loot) => {
    deleteLoot(loot).then(mutateLoot)
  }

  const handleClaimClick = ({ gp, xp }) => {
    Promise.all(loot.map((x) => deleteLoot(x))).then(mutateLoot)
  }

  if (showAdd) {
    return (
      <AddLoot
        onSave={handleSaveClick}
        onCancel={handleCancelClick}
        className={className}
      />
    )
  }

  return (
    <Table className={className}>
      <thead>
        <tr>
          <th>Loot</th>
          <th className="w-12 text-right">GP</th>
          <th className="w-12 text-right">XP</th>
          <TableHeadingButton
            className="w-4"
            secondary
            onClick={handleAddClick}
          >
            {showAdd ? 'Cancel' : 'Add'}
          </TableHeadingButton>
        </tr>
      </thead>
      <tbody>
        <tr className="font-semibold">
          <td>Total</td>
          <td className="text-right">{totalGp}</td>
          <td className="text-right">{totalXp}</td>
          <td>
            <Button
              primary={claim}
              secondary={!claim}
              onClick={handleClaimClick}
            >
              Claim
            </Button>
          </td>
        </tr>
        {loot && renderLoot(loot, handleDeleteClick)}
      </tbody>
    </Table>
  )
}

LootTable.propTypes = {
  className: PropTypes.string,
  claim: PropTypes.bool,
}

export default LootTable
