import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Dice = ({ roll, highlight, ...rest }) => (
  <div
    className={mergeClass(
      rest,
      highlight.includes(roll) ? 'bg-black text-white' : ''
    )}
    {...noClass(rest)}
  >
    {roll}
  </div>
)

Dice.propTypes = {
  roll: PropTypes.number,
  highlight: PropTypes.array,
}

export default Dice
