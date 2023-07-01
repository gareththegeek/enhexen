import PropTypes from 'prop-types'

const Input = ({ onChange, ...rest }) => (
  <input
    className="border-2 border-black"
    {...rest}
    onChange={(e) => onChange && onChange(e?.target?.value)}
  />
)

Input.propTypes = {
  onChange: PropTypes.func,
}

export default Input
