import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { mergeClass, noClass } from '../mergeClass'
import Button from './Button'

const ButtonLink = ({ to, children, ...rest }) => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate(to)}
      className={mergeClass(rest)}
      {...noClass(rest)}
    >
      {children}
    </Button>
  )
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ButtonLink
