import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Duration } from 'luxon'
import { ClockContext } from '../../contexts/ClockContext'
import Form from '../molecules/Form'
import Section from '../atoms/Section'

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

const AddTimer = ({ onSave, onCancel, className }) => {
  const { now } = useContext(ClockContext)

  const handleSave = (nextTimer) => {
    if (!onSave) {
      return
    }

    const { period, amount } = nextTimer
    const duration = Duration.fromObject({ [period]: amount })
    onSave({ ...nextTimer, due: now.plus(duration), duration })
  }

  const applyPreset = ({ value, setState }) => {
    setState({ ...presets[value] })
  }

  return (
    <Section heading={<h3>Add Timer</h3>} className={className}>
      <Form
        onSubmit={handleSave}
        onCancel={onCancel}
        definition={{
          heading: 'Add Timer',
          fields: [
            { name: 'name', label: 'Name', type: 'text' },
            {
              name: 'type',
              label: 'Type',
              type: 'select',
              changeHandler: applyPreset,
              options: [
                { value: 'custom', label: '✏️Custom' },
                { value: 'disease', label: '🦠Disease' },
                { value: 'faction', label: '🚩Faction' },
                { value: 'rations', label: '🍛Rations' },
                { value: 'rent', label: '💵Rent' },
                { value: 'rest', label: '💤Rest' },
                { value: 'restock', label: '👹Restock' },
                { value: 'spell', label: '🪄Spell' },
                { value: 'status', label: '🍄Status' },
                { value: 'torch', label: '🔥Torch' },
              ],
            },
            {
              name: 'period',
              label: 'Period',
              type: 'select',
              options: [
                { value: 'minutes', label: 'Minutes' },
                { value: 'hours', label: 'Hours' },
                { value: 'days', label: 'Days' },
                { value: 'weeks', label: 'Weeks' },
                { value: 'months', label: 'Months' },
                { value: 'years', label: 'Years' },
              ],
            },
            { name: 'amount', label: 'Amount', type: 'number' },
          ],
        }}
      />
    </Section>
  )
}

AddTimer.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string
}

export default AddTimer
