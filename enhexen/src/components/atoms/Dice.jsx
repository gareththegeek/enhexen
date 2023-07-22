import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Dice = ({ roll, highlight, ...rest }) => (
  <div
    className={mergeClass(
      rest,
      `${
        highlight.includes(roll) ? 'bg-grey-900 text-grey-50' : ''
      } w-10 h-10 border-2 border-grey-500 rounded flex items-center justify-center`
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
