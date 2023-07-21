import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'
import Field from '../atoms/Field'
import Input from '../atoms/Input'
import IconButton from '../atoms/IconButton'

const SearchBox = ({ name, label, onChange, onClick, labelWidth, ...rest }) => {
  const handleKeyUp = (e) => {
    if (e.key !== 'Enter') {
      return
    }
    onClick()
  }

  return (
    <fieldset className="flex items-end max-w-xs md:w-16">
      <Field
        name={name}
        label={label}
        className={mergeClass(rest)}
        labelWidth={labelWidth}
        {...noClass(rest)}
      >
        <Input className="w-[100%]" onChange={onChange} onKeyUp={handleKeyUp} />
      </Field>
      <IconButton onClick={onClick} secondary className="grayscale" title="Search">
        🔍
      </IconButton>
    </fieldset>
  )
}

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelWidth: PropTypes.string
}

export default SearchBox
