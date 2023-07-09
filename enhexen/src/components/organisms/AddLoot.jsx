import { useState } from 'react'
import PropTypes from 'prop-types'
import Field from '../molecules/Field'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Select from '../atoms/Select'

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
    <form className="flex flex-col gap-4 max-w-sm">
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
      <div className="flex justify-stretch gap-4">
        <Button className="grow" onClick={handleSave}>Save</Button>
        <Button className="grow" onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  )
}

AddLoot.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default AddLoot
