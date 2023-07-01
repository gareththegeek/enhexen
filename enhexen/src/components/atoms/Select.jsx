import PropTypes from 'prop-types'

const Select = ({ children, onChange, ...props }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <select onChange={handleChange} {...props}>
      {children}
    </select>
  )
}

Select.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
}

export default Select
