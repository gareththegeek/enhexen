import PropTypes from 'prop-types'

const Hex = ({ onClick, children }) => (
  <button className='relative w-14 h-14' onClick={onClick} >
    <div className="centred-absolute rotate-[30deg] text-7xl text-outline select-none pointer-events-none">
      &#x2b22;
    </div>
    <div className="centred-absolute">{children}</div>
  </button>
)

Hex.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Hex
