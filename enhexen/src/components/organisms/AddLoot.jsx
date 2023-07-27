import PropTypes from 'prop-types'
import Form from '../molecules/Form'
import Section from '../atoms/Section'

const AddLoot = ({ onSave, onCancel, className }) => (
  <Section heading={<h2>Add Loot</h2>} className={className}>
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
  </Section>
)

AddLoot.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string,
}

export default AddLoot
