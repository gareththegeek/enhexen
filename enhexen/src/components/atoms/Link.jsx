import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Link = ({to, children}) => <NavLink to={to} className="underline">{children}</NavLink> 

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Link
