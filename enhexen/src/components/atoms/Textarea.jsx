import PropTypes from 'prop-types'

const Textarea = ({ onChange, className, ...rest }) => (
  <textarea
    className={className}
    onChange={({ target: { name, value } }) =>
      onChange && onChange({ name, value })
    }
    {...rest}
  />
)

Textarea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
}

export default Textarea
