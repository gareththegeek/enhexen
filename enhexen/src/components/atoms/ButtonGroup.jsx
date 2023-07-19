import PropTypes from 'prop-types'
import { mergeClass } from '../mergeClass'

const ButtonGroup = ({ children, ...rest }) => (
  <div className={mergeClass(rest, "flex gap-4")}>{children}</div>
)

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonGroup
