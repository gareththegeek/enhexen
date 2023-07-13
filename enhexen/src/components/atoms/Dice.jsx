import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Dice = ({ roll, highlight, ...rest }) => (
  <div
    className={mergeClass(
      rest,
      highlight.includes(roll) ? 'bg-zinc-900 text-zinc-50' : ''
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
