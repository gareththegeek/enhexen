import PropTypes from 'prop-types'
import Form from '../molecules/Form'
import Section from '../atoms/Section'
import { useFetchLoot, usePostLoot } from '../../hooks/loot'

const AddLoot = ({ onDismiss, className }) => {
  const { mutateLoot } = useFetchLoot()
  const postLoot = usePostLoot()

  const handleSaveClick = (loot) => {
    postLoot(loot).then(mutateLoot)
    onDismiss()
  }

  return (
    <Section heading={<h2>Add Loot</h2>} className={className}>
      <Form
        onSubmit={handleSaveClick}
        onCancel={onDismiss}
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
}

AddLoot.propTypes = {
  onDismiss: PropTypes.func,
  className: PropTypes.string,
}

export default AddLoot
