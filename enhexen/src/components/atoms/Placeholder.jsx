import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Placeholder = ({ children, ...rest }) => (
  <div className={mergeClass(rest, "text-stone-600")} {...noClass(rest)}>
    {children}
  </div>
)

Placeholder.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Placeholder
