import { useState } from 'react'
import { deleteLoot, postLoot, useFetchLoot } from '../../hooks/loot'
import Button from '../atoms/Button'
import H2 from '../atoms/H2'
import AddLoot from './AddLoot'
import LootList from './LootList'

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
    <section>
      <H2>Loot</H2>
      <Button onClick={handleAddClick}>Add</Button>
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
    </section>
  )
}

export default Loot
