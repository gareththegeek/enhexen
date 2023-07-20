import PropTypes from 'prop-types'
import ButtonBase from './ButtonBase'
import { mergeClass, noClass } from '../mergeClass'

const IconButton = ({ children, ...rest }) => (
  <ButtonBase className={mergeClass(rest, 'px-1 py-0')} {...noClass(rest)}>
    {children}
  </ButtonBase>
)

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IconButton
