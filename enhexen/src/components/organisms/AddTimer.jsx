import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Duration } from 'luxon'
import { ClockContext } from '../../contexts/ClockContext'
import Input from '../atoms/Input'
import ButtonGroup from '../atoms/ButtonGroup'
import Select from '../atoms/Select'
import Field from '../atoms/Field'
import Button from '../atoms/Button'

const presets = {
  faction: { amount: 1, period: 'months', name: '🚩Faction' },
  rations: { amount: 1, period: 'days', name: '🍛Rations' },
  rent: { amount: 1, period: 'months', name: '💵Rent' },
  rest: { amount: 16, period: 'hours', name: '💤Rest' },
  restock: { amount: 1, period: 'months', name: '👹Restock' },
  spell: { amount: 1, period: 'hours', name: '🪄Spell' },
  status: { amount: 1, period: 'days', name: '🍄Status' },
  torch: { amount: 1, period: 'hours', name: '🔥Torch' },
  custom: { amount: '', period: '', name: '' },
}

const initialState = {
  due: '',
  name: '',
  type: '',
  period: '',
  amount: '',
  duration: '',
}

const AddTimer = ({ onSave, onCancel }) => {
  const { now } = useContext(ClockContext)
  const [timer, setTimer] = useState(initialState)

  const clear = () => {
    setTimer(initialState)
  }

  const updateTimer = (nextTimer) => {
    const { period, amount } = nextTimer
    const duration = Duration.fromObject({ [period]: amount })
    setTimer({ ...nextTimer, due: now.plus(duration), duration })
  }

  const handleNameChange = (name) => {
    updateTimer({ ...timer, name })
  }

  const handleTypeChange = (type) => {
    updateTimer({ ...presets[type], type })
  }

  const handlePeriodChange = (period) => {
    updateTimer({ ...timer, period })
  }

  const handleAmountChange = (amount) => {
    updateTimer({ ...timer, amount })
  }

  const handleSave = () => {
    if (onSave) {
      onSave(timer)
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
      <h3 className="m-auto">Add Timer</h3>
      <Field label="Name" name="name">
        <Input name="name" onChange={handleNameChange} value={timer.name} />
      </Field>
      <Field label="Type" name="type">
        <Select
          className="w-32"
          name="type"
          onChange={handleTypeChange}
          value={timer.type}
        >
          <option value="custom">✏️Custom</option>
          <option value="disease">🦠Disease</option>
          <option value="faction">🚩Faction</option>
          <option value="rations">🍛Rations</option>
          <option value="rent">💵Rent</option>
          <option value="rest">💤Rest</option>
          <option value="restock">👹Restock</option>
          <option value="spell">🪄Spell</option>
          <option value="status">🍄Status</option>
          <option value="torch">🔥Torch</option>
        </Select>
      </Field>
      <Field label="Period" name="period">
        <Select
          className="w-32"
          name="period"
          onChange={handlePeriodChange}
          value={timer.period}
        >
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </Select>
      </Field>
      <Field label="Amount" name="amount">
        <Input
          name="amount"
          type="number"
          onChange={handleAmountChange}
          value={timer.amount}
        />
      </Field>
      <ButtonGroup>
        <Button className="grow" primary onClick={handleSave}>
          Save
        </Button>
        <Button className="grow" secondary onClick={handleCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  )
}

AddTimer.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default AddTimer
