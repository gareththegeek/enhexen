import { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Field = ({
  name,
  label,
  children,
  labelWidth,
  horizonal = false,
  ...rest
}) => (
  <div
    className={mergeClass(rest, `flex ${horizonal ? 'flex-row' : 'flex-col'}`)}
    {...noClass(rest)}
  >
    <label
      className={`${labelWidth} text-grey-600 font-normal text-xs uppercase`}
      htmlFor={name}
    >
      {label}
    </label>
    {cloneElement(children, { name, className: "h-auto" })}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  labelWidth: PropTypes.string,
  label: PropTypes.string.isRequired,
  horizonal: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Field
