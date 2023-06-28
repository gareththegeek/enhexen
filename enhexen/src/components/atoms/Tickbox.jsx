import PropTypes from 'prop-types'
import { useRef } from 'react'

const Tickbox = ({ name, value, onChange }) => {
  const ref = useRef(null)

  return (
    <input
      type="checkbox"
      name={name}
      ref={ref}
      defaultChecked={value}
      onChange={() => onChange(ref.current.checked)}
    />
  )
}

Tickbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
}

export default Tickbox
