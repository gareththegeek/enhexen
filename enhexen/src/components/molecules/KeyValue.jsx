import PropTypes from 'prop-types'

const KeyValue = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
)

KeyValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
}

export default KeyValue
