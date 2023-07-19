import PropTypes from 'prop-types'
import Form from '../molecules/Form'
import DropPanel from '../atoms/DropPanel'

const AddLoot = ({ onSave, onCancel }) => (
  <DropPanel heading={<h3>Add Loot</h3>}>
    <Form
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
  </DropPanel>
)

AddLoot.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default AddLoot
