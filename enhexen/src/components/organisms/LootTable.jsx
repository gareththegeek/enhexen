import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDeleteLoot, usePostLoot, useFetchLoot } from '../../hooks/loot'
import Table from '../atoms/Table'
import AddLoot from '../organisms/AddLoot'
import { mergeClass } from '../mergeClass'
import TableHeadingButton from '../atoms/TableHeadingButton'
import Placeholder from '../atoms/Placeholder'
import Button from '../atoms/Button'

const renderLoot = (loot, onDelete) =>
  loot.map((l) => (
    <tr key={l.id}>
      <td>{l.name}</td>
      <td>{l.type === 'gp' && l.amount}</td>
      <td>{l.amount}</td>
      <td>
        <Button onClick={onDelete}>Delete</Button>
      </td>
    </tr>
  ))

const total = (loot, type) =>
  loot?.filter((x) => !type || x.type === type).reduce((a, c) => a + c.amount, 0)

const LootTable = ({ className, claim = false }) => {
  const [showAdd, setShowAdd] = useState(false)
  const { loot, mutateLoot } = useFetchLoot()
  const deleteLoot = useDeleteLoot()
  const postLoot = usePostLoot()

  const totalGp = total(loot, 'gp')
  const totalXp = total(loot)

  if (totalGp + totalXp === 0) {
    return <Placeholder>No loot yet..</Placeholder>
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

  return (
    <Table className={mergeClass({ className }, 'relative')}>
      {showAdd && (
        <AddLoot onSave={handleSaveClick} onCancel={handleCancelClick} />
      )}
      <thead>
        <tr>
          <th>Loot</th>
          <th className="w-12">GP</th>
          <th className="w-12">XP</th>
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
          <td>{totalGp}</td>
          <td>{totalXp}</td>
          <td>
            <Button primary={claim} secondary={!claim}>Claim</Button>
          </td>
        </tr>
        {loot && renderLoot(loot, handleDeleteClick)}
      </tbody>
    </Table>
  )

  // return (
  //   <Section
  //     className={mergeClass({ className }, 'relative')}
  //     heading={
  //       <ButtonHeading
  //         heading={<h2>Loot</h2>}
  //         secondary={!claim}
  //         button={showAdd ? 'Cancel' : 'Add'}
  //         handleClick={handleAddClick}
  //       />
  //     }
  //   >
  //     {showAdd && (
  //       <AddLoot onSave={handleSaveClick} onCancel={handleCancelClick} />
  //     )}
  //     {loot && (
  //       <LootList
  //         claim={claim}
  //         loot={loot}
  //         onDelete={handleDeleteClick}
  //         onClaim={handleClaimClick}
  //       />
  //     )}
  //   </Section>
  // )
}

LootTable.propTypes = {
  className: PropTypes.string,
  claim: PropTypes.bool,
}

export default LootTable
