import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Hex = ({ onClick, children, ...rest }) => (
  <button
    className={mergeClass(rest, 'w-14 h-14 border-0')}
    onClick={onClick}
    {...noClass(rest)}
  >
    <div className="relative">
      <div className="centred-absolute transform -translate-x-[46%] -translate-y-[53%] rotate-[31deg] text-7xl text-outline select-none pointer-events-none">
        &#x2b22;
      </div>
      <div className="centred-absolute">{children}</div>
    </div>
  </button>
)

Hex.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Hex
