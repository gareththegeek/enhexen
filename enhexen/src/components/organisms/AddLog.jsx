import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ClockContext } from '../../contexts/ClockContext'
import Section from '../atoms/Section'
import Form from '../molecules/Form'
import { usePutLog, usePostLog, useFetchLog } from '../../hooks/logs'

const AddLog = ({ data, onDismiss, className }) => {
  const { now } = useContext(ClockContext)
  const { mutateEntries } = useFetchLog()
  const postLog = usePostLog()
  const putLog = usePutLog()
  const isNew = !data

  const handleSaveClick = (log) => {
    if (isNew) {
      console.log(log, now)
      postLog({
        text: log.text,
        created: now,
        pinned: false,
      }).then(mutateEntries)
    } else {
      putLog({
        id: data.id,
        text: log.text,
        created: log.created,
        pinned: data.pinned,
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
          fields: [{ name: 'text', label: 'Text', type: 'textarea' }],
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
