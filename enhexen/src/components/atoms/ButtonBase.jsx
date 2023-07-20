import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const ButtonBase = ({ onClick, children, primary, secondary, ...rest }) => (
  <button
    onClick={onClick}
    className={mergeClass(
      rest,
      `${
        primary
          ? 'border-2 border-orange-600 bg-orange-600 text-orange-50 hover:bg-orange-500 font-semibold'
          : secondary
          ? 'border-2 border-stone-500 bg-stone-50 text-orange-700 hover:bg-orange-50 font-semibold'
          : 'underline font-normal text-stone-900 hover:text-stone-600'
      } rounded`
    )}
    {...noClass(rest)}
  >
    {children}
  </button>
)

ButtonBase.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default ButtonBase
