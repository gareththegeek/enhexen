import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const ButtonBase = ({
  onClick,
  children,
  primary,
  secondary,
  warning,
  ...rest
}) => (
  <button
    onClick={onClick}
    className={mergeClass(
      rest,
      `${
        primary
          ? 'border-2 border-primary-600 bg-primary-600 text-primary-50 hover:bg-primary-500 font-semibold'
          : warning
            ? 'border-2 border-warning-600 bg-warning-600 text-grey-800 hover:bg-warning-500 font-semibold'
            : `font-semibold text-primary-500 hover:text-primary-800 ${
                secondary &&
                'border-2 border-grey-500 bg-grey-50 hover:bg-primary-100'
              }`
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
  warning: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default ButtonBase
