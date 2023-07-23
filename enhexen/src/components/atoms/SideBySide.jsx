import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const SidebySide = ({ children, ...rest }) => (
  <div
    className={mergeClass(rest, 'flex flex-col md:flex-row gap-8')}
    {...noClass(rest)}
  >
    {children}
  </div>
)

SidebySide.propTypes = {
  children: PropTypes.node,
}

export default SidebySide
