import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const HeadingButton = ({ onClick, children, primary, ...rest }) => (
  <button
    onClick={onClick}
    className={mergeClass(
      rest,
      `${
        primary ? 'bg-yellow-400' : 'bg-zinc-300'
      } text-zinc-900 font-normal px-4 py-1 -my-1 rounded text-sm`
    )}
    {...noClass(rest)}
  >
    {children}
  </button>
)

HeadingButton.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default HeadingButton
