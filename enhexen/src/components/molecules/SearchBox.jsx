import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'
import Field from '../atoms/Field'
import IconButton from '../atoms/IconButton'
import { useState } from 'react'
import InputWithSuggestions from './InputWithSuggestions'

const SearchBox = ({
  name,
  label,
  onSearch,
  labelWidth,
  horizontal,
  ...rest
}) => {
  const [value, setValue] = useState('')

  const handleChange = ({ value }) => {
    setValue(value)
  }

  const handleKeyUp = (e) => {
    if (e.key !== 'Enter') {
      return
    }
    onSearch(value)
  }

  return (
    <fieldset className="flex items-end">
      <Field
        name={name}
        label={label}
        className={mergeClass(rest)}
        labelWidth={labelWidth}
        horizontal={horizontal}
        {...noClass(rest)}
      >
        <InputWithSuggestions
          className="w-[100%]"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
      </Field>
      <IconButton
        onClick={() => onSearch(value)}
        secondary
        className="grayscale"
        title="Search"
      >
        🔍
      </IconButton>
    </fieldset>
  )
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelWidth: PropTypes.string,
  horizontal: PropTypes.bool,
}

export default SearchBox
