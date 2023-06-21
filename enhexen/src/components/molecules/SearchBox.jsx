import PropTypes from 'prop-types'
import Field from './Field'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const SearchBox = ({ name, label, onChange, onClick, ...rest }) => {
  return (
    <fieldset className="flex gap-2">
      <Field name={name} label={label} {...rest}>
        <Input onChange={onChange} />
      </Field>
      <Button onClick={onClick}>Find</Button>
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
