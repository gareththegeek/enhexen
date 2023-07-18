import PropTypes from 'prop-types'
import Form from '../molecules/Form'

const AddLoot = ({ onSave, onCancel }) => (
  <Form
    className="max-w-sm right-0 absolute z-50"
    onSubmit={onSave}
    onCancel={onCancel}
    definition={{
      heading: 'Add Loot',
      fields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'amount', label: 'Amount', type: 'number' },
        {
          name: 'type',
          label: 'Type',
          type: 'select',
          initialValue: 'gp',
          options: [
            { value: 'gp', label: 'GP' },
            { value: 'xp', label: 'XP' },
          ],
        },
      ],
    }}
  />
)

AddLoot.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default AddLoot
