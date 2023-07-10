import PropTypes from 'prop-types'
import Field from './Field'
import Input from '../atoms/Input'
import IconButton from '../atoms/IconButton'
import { mergeClass, noClass } from '../mergeClass'

const SearchBox = ({ name, label, onChange, onClick, ...rest }) => {
  return (
    <fieldset className="flex items-end max-w-xs md:w-16">
      <Field
        name={name}
        label={label}
        className={mergeClass(rest, 'flex flex-col')}
        {...noClass(rest)}
      >
        <Input className="w-[100%]" onChange={onChange} />
      </Field>
      <IconButton onClick={onClick} className="grayscale" title="Search">🔍</IconButton>
    </fieldset>
  )
}

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default SearchBox
