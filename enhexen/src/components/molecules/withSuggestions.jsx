import PropTypes from 'prop-types'
import { useState } from 'react'

const withSuggestions = (WrappedComponent) => {
  const TextBehaviourComponent = (props) => {
    const [value, setValue] = useState('')
    const handleChange = ({ value }) => {
      if (value === 'foo') {
        // TODO testing
        setValue('foobar')
      } else {
        setValue(value)
      }
      if (props.onChange) {
        props.onChange({ value })
      }
    }
    return <WrappedComponent value={value} {...props} onChange={handleChange} />
  }

  TextBehaviourComponent.propTypes = {
    onChange: PropTypes.func,
  }
  return TextBehaviourComponent
}

export default withSuggestions
