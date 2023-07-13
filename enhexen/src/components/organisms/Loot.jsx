import PropTypes from 'prop-types'
import { useState } from 'react'
import { deleteLoot, postLoot, useFetchLoot } from '../../hooks/loot'
import AddLoot from '../organisms/AddLoot'
import Section from '../atoms/Section'
import LootList from '../molecules/LootList'
import ButtonHeading from '../molecules/ButtonHeading'
import { mergeClass } from '../mergeClass'

const Loot = ({ className }) => {
  const [showAdd, setShowAdd] = useState(false)
  const { loot, mutateLoot } = useFetchLoot()

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
          heading="Loot"
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
}

export default Loot
