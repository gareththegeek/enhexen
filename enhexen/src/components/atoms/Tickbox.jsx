import PropTypes from 'prop-types'
import { useRef } from 'react'
import { mergeClass, noClass } from '../mergeClass'

const Tickbox = ({ name, value, onChange, ...rest }) => {
  const ref = useRef(null)

  return (
    <input
      type="checkbox"
      name={name}
      ref={ref}
      defaultChecked={value}
      onChange={() => onChange({ name, value: ref.current.checked })}
      className={mergeClass(rest, 'self-start h-8')}
      {...noClass(rest)}
    />
  )
}

Tickbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
}

export default Tickbox
