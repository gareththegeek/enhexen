import PropTypes from 'prop-types'

const Dice = ({ roll, highlight }) => (
  <div className={highlight.includes(roll) ? 'bg-black text-white' : ''}>{roll}</div>
)

Dice.propTypes = {
  roll: PropTypes.number,
  highlight: PropTypes.array,
}

export default Dice
