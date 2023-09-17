import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ClockContext } from '../../contexts/ClockContext'
import Section from '../atoms/Section'
import Form from '../molecules/Form'
import { usePutLog, usePostLog, useFetchLog } from '../../hooks/logs'
import { usePostTag } from '../../hooks/tags'

const AddLog = ({ data, onDismiss, className }) => {
  const { now } = useContext(ClockContext)
  const { mutateEntries } = useFetchLog()
  const postLog = usePostLog()
  const putLog = usePutLog()
  const postTag = usePostTag()
  const isNew = !data

  const handleSaveClick = async (log) => {
    const tagTexts = log.tags.split(',').map((x) => x.trim())
    const tags = await Promise.all(tagTexts.map((x) => postTag({ text: x })))
    if (isNew) {
      postLog({
        text: log.text,
        created: now,
        pinned: false,
        tags: tags.map(({ id }) => id),
      }).then(mutateEntries)
    } else {
      putLog({
        id: data.id,
        text: log.text,
        created: log.created,
        pinned: data.pinned,
        tags: tags.map(({ id }) => id),
      }).then(mutateEntries)
    }
    onDismiss()
  }

  return (
    <Section heading={<h2>Add Log Entry</h2>} className={className}>
      <Form
        initialData={data}
        onSubmit={handleSaveClick}
        onCancel={onDismiss}
        definition={{
          heading: 'Add Log Entry',
          fields: [
            { name: 'text', label: 'Text', type: 'textarea' },
            { name: 'tags', label: 'Tags (comma separated)', type: 'text' },
          ],
        }}
      />
    </Section>
  )
}

AddLog.propTypes = {
  data: PropTypes.object,
  onDismiss: PropTypes.func,
  className: PropTypes.string,
}

export default AddLog
