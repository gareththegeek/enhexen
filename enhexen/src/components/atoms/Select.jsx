import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Select = ({ children, onChange, ...rest }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <select
      onChange={handleChange}
      className={mergeClass(rest)}
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
