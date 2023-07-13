import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Hex = ({ onClick, selected, children, ...rest }) => (
  <button
    className={mergeClass(rest, `w-14 h-14 border-0  ${selected ? 'text-yellow-400' : 'text-zinc-400 hover:text-zinc-300'} bg-transparent hover:bg-transparent`)}
    onClick={onClick}
    disabled={selected}
    {...noClass(rest)}
  >
    <div className="relative">
      <div
        className={`centred-absolute transform -translate-x-[46%] -translate-y-[53%] rotate-[31deg] text-7xl select-none pointer-events-none`}
      >
        &#x2b22;
      </div>
      <div className={`centred-absolute${selected ? ' text-zinc-900' : ' text-zinc-50'}`}>
        {children}
      </div>
    </div>
  </button>
)

Hex.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  selected: PropTypes.bool,
}

export default Hex
