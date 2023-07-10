import { useState } from 'react'
import { deleteLoot, postLoot, useFetchLoot } from '../../hooks/loot'
import AddLoot from './AddLoot'
import LootList from '../molecules/LootList'
import ButtonHeading from '../molecules/ButtonHeading'

const Loot = () => {
  const [showAdd, setShowAdd] = useState(false)
  const { loot, mutateLoot } = useFetchLoot()

  const handleAddClick = () => {
    setShowAdd(true)
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

  const handleClaimClick = ({ sp, xp }) => {
    Promise.all(loot.map((x) => deleteLoot(x))).then(mutateLoot)
  }

  return (
    <>
      <ButtonHeading heading="Loot" button="Add" handleClick={handleAddClick} />
      {showAdd && (
        <AddLoot onSave={handleSaveClick} onCancel={handleCancelClick} />
      )}
      {loot && (
        <LootList
          loot={loot}
          onDelete={handleDeleteClick}
          onClaim={handleClaimClick}
        />
      )}
    </>
  )
}

export default Loot
