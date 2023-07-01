import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Duration } from 'luxon'
import { ClockContext } from '../../contexts/ClockContext'
import Field from '../molecules/Field'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Select from '../atoms/Select'

const presets = {
  faction: { amount: 1, period: 'months', name: 'Faction' },
  rations: { amount: 1, period: 'days', name: 'Rations' },
  rent: { amount: 1, period: 'months', name: 'Rent' },
  rest: { amount: 16, period: 'hours', name: 'Rest' },
  restock: { amount: 1, period: 'months', name: 'Restock' },
  spell: { amount: 1, period: 'hours', name: 'Spell' },
  status: { amount: 1, period: 'days', name: 'Status' },
  torch: { amount: 1, period: 'hours', name: 'Torch' },
}

const AddTimer = ({ onSave, onCancel }) => {
  const { now } = useContext(ClockContext)
  const [due, setDue] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [period, setPeriod] = useState('')
  const [amount, setAmount] = useState('')

  const clear = () => {
    setDue(undefined)
    setName(undefined)
  }

  const updateDue = ({ period, amount }) => {
    const duration = Duration.fromObject({ [period]: amount })
    setDue(now.plus(duration))
  }

  const handleTypeChange = (type) => {
    setType(type)

    const preset = presets[type]
    if (!preset) {
      return
    }

    setName(preset.name)
    setPeriod(preset.period)
    setAmount(preset.amount)
    updateDue(preset)
  }

  const handlePeriodChange = (period) => {
    setPeriod(period)
    updateDue({ period, amount })
  }

  const handleAmountChange = (amount) => {
    setAmount(amount)
    updateDue({ period, amount })
  }

  const handleSave = () => {
    if (onSave) {
      onSave({ type, name, due })
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
    <form>
      <Field label="Name" name="name">
        <Input name="name" onChange={setName} value={name} />
      </Field>
      <Field label="Type" name="type">
        <Select name="type" onChange={handleTypeChange} value={type}>
          <option value="custom">Custom</option>
          <option value="disease">Disease</option>
          <option value="faction">Faction</option>
          <option value="rations">Rations</option>
          <option value="rent">Rent</option>
          <option value="rest">Rest</option>
          <option value="restock">Restock</option>
          <option value="spell">Spell</option>
          <option value="status">Status</option>
          <option value="torch">Torch</option>
        </Select>
      </Field>
      <Field name="period" label="Period">
        <Select name="period" onChange={handlePeriodChange} value={period}>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </Select>
      </Field>
      <Field name="amount" label="Amount">
        <Input
          name="amount"
          type="number"
          onChange={handleAmountChange}
          value={amount}
        />
      </Field>
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </form>
  )
}

AddTimer.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default AddTimer
