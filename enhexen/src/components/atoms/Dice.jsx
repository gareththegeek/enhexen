import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Dice = ({ roll, highlight, ...rest }) => (
  <div
    className={mergeClass(
      rest,
      `${
        highlight.includes(roll) ? 'bg-stone-900 text-stone-50' : ''
      } w-10 h-10 border-2 border-stone-500 rounded flex items-center justify-center`
    )}
    {...noClass(rest)}
  >
    <span className="text-xl">{roll}</span>
  </div>
)

Dice.propTypes = {
  roll: PropTypes.number,
  highlight: PropTypes.array,
}

export default Dice
