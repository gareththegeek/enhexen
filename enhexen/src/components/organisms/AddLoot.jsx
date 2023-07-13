import { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
import ButtonGroup from '../atoms/ButtonGroup'
import Field from '../atoms/Field'

const initialState = {
  name: '',
  amount: '',
  type: 'sp',
}

const AddLoot = ({ onSave, onCancel }) => {
  const [loot, setLoot] = useState(initialState)

  const clear = () => {
    setLoot(initialState)
  }

  const handleNameChange = (name) => {
    setLoot({ ...loot, name })
  }

  const handleAmountChange = (amount) => {
    setLoot({ ...loot, amount })
  }

  const handleTypeChange = (type) => {
    setLoot({ ...loot, type })
  }

  const handleSave = () => {
    if (onSave) {
      onSave(loot)
    }
    clear()
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
    clear()
  }

  return (
    <form className="max-w-sm right-0 absolute z-50">
      <h3 className="m-auto">Add Loot</h3>
      <Field label="Name" name="name">
        <Input name="name" onChange={handleNameChange} value={loot.name} />
      </Field>
      <Field label="Amount" name="amount">
        <Input
          name="amount"
          type="number"
          onChange={handleAmountChange}
          value={loot.amount}
        />
      </Field>
      <Field label="Type" name="type">
        <Select
          className="w-20"
          name="type"
          onChange={handleTypeChange}
          value={loot.type}
        >
          <option value="sp">SP</option>
          <option value="xp">XP</option>
        </Select>
      </Field>
      <ButtonGroup>
        <button className="grow bg-yellow-300" onClick={handleSave}>
          Save
        </button>
        <button className="grow" onClick={handleCancel}>
          Cancel
        </button>
      </ButtonGroup>
    </form>
  )
}

AddLoot.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default AddLoot
