import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDeleteLoot, usePostLoot, useFetchLoot } from '../../hooks/loot'
import AddLoot from '../organisms/AddLoot'
import Section from '../atoms/Section'
import LootList from '../molecules/LootList'
import ButtonHeading from '../molecules/ButtonHeading'
import { mergeClass } from '../mergeClass'

const Loot = ({ className, claim = false }) => {
  const [showAdd, setShowAdd] = useState(false)
  const { loot, mutateLoot } = useFetchLoot()
  const deleteLoot = useDeleteLoot()
  const postLoot = usePostLoot()

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

  const handleClaimClick = ({ sp, xp }) => {
    Promise.all(loot.map((x) => deleteLoot(x))).then(mutateLoot)
  }

  return (
    <Section
      className={mergeClass({ className }, 'relative')}
      heading={
        <ButtonHeading
          heading={<h2>Loot</h2>}
          secondary={!claim}
          button={showAdd ? 'Cancel' : 'Add'}
          handleClick={handleAddClick}
        />
      }
    >
      {showAdd && (
        <AddLoot onSave={handleSaveClick} onCancel={handleCancelClick} />
      )}
      {loot && (
        <LootList
          claim={claim}
          loot={loot}
          onDelete={handleDeleteClick}
          onClaim={handleClaimClick}
        />
      )}
    </Section>
  )
}

Loot.propTypes = {
  className: PropTypes.string,
  claim: PropTypes.bool
}

export default Loot
