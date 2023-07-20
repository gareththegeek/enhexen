import PropTypes from 'prop-types'
import ButtonBase from './ButtonBase'
import { mergeClass, noClass } from '../mergeClass'

const Button = ({ children, ...rest }) => (
  <ButtonBase className={mergeClass(rest, 'px-4 py-1 text-sm')} {...noClass(rest)}>
    {children}
  </ButtonBase>
)

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
