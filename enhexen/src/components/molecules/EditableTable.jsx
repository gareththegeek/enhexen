import PropTypes from 'prop-types'
import { cloneElement, useState } from 'react'
import TableHeadingButton from '../atoms/TableHeadingButton'

const EditableTable = ({ form, table }) => {
  const [showAdd, setShowAdd] = useState(false)
  const [data, setData] = useState()

  const handleAddClick = () => {
    setData(undefined)
    setShowAdd(!showAdd)
  }

  const handleEditClick = (data) => {
    setData(data)
    setShowAdd(true)
  }

  const handleCancelClick = () => {
    setShowAdd(false)
  }

  if (showAdd) {
    return cloneElement(form, {
      data,
      onDismiss: handleCancelClick,
    })
  }

  const addButton = (
    <TableHeadingButton className="w-1" secondary onClick={handleAddClick}>
      {showAdd ? 'Cancel' : 'Add'}
    </TableHeadingButton>
  )

  return cloneElement(table, { addButton, onEdit: handleEditClick })
}

EditableTable.propTypes = {
  form: PropTypes.node,
  table: PropTypes.node,
}

const withEditor = ({ form, table }) => {
  const WithEditor = (props) => (
    <EditableTable
      form={cloneElement(form, props)}
      table={cloneElement(table, props)}
    />
  )
  return WithEditor
}

export default withEditor
