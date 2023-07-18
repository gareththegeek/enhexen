import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Select = ({ children, onChange, ...rest }) => {
  const handleChange = ({ target: { name, value } }) => {
    if (onChange) {
      onChange({ name, value })
    }
  }

  return (
    <select
      onChange={handleChange}
      className={mergeClass(rest, "flex-1")}
      {...noClass(rest)}
    >
      {children}
    </select>
  )
}

Select.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
}

export default Select
