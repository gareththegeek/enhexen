import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'
import Button from '../atoms/Button'
import ButtonGroup from '../atoms/ButtonGroup'
import Input from '../atoms/Input'
import { useState } from 'react'
import Select from '../atoms/Select'
import Tickbox from '../atoms/Tickbox'
import Field from '../atoms/Field'

const Form = ({ definition, onSubmit, onCancel, ...rest }) => {
  const getInitialState = ({ fields }) =>
    fields.reduce((a, { name, type, initialValue }) => {
      a[name] = initialValue ?? type === 'tickbox' ? false : ''
      return a
    }, {})

  const [state, setState] = useState(getInitialState(definition))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit({ ...state })
    }
    setState(getInitialState(definition))
  }

  const handleCancel = (e) => {
    e.preventDefault()
    if (onCancel) {
      onCancel()
    }
    setState(getInitialState(definition))
  }

  const handleChange = ({ name, value }) => {
    setState({ ...state, [name]: value })

    const fieldDefinition = definition.fields.find((f) => f.name === name)
    if (!fieldDefinition?.changeHandler) {
      return
    }
    fieldDefinition.changeHandler({ name, value, setState })
  }

  const renderField = ({ name, label, type, options }) => {
    const getInput = () => {
      switch (type) {
        case 'text':
        case 'number':
        case 'password':
          return (
            <Input
              name={name}
              type={type}
              onChange={handleChange}
              value={state[name]}
            />
          )
        case 'select':
          return (
            <Select name={name} onChange={handleChange} value={state[name]}>
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          )
        case 'tickbox':
          return (
            <Tickbox name={name} onChange={handleChange} value={state[name]} />
          )
        default:
          throw new Error(`Unknown field type: {type}`)
      }
    }

    return (
      <Field key={name} name={name} label={label}>
        {getInput()}
      </Field>
    )
  }

  return (
    <form className={mergeClass(rest)} {...noClass(rest)}>
      <h3 className="m-auto">{definition.heading}</h3>
      {definition.fields.map(renderField)}
      <ButtonGroup>
        {onSubmit && (
          <Button className="grow" primary onClick={handleSubmit}>
            Save
          </Button>
        )}
        {onCancel && (
          <Button className="grow" onClick={handleCancel}>
            Cancel
          </Button>
        )}
      </ButtonGroup>
    </form>
  )
}

Form.propTypes = {
  definition: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Form
