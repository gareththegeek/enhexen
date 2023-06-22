import React from 'react'
import PropTypes from 'prop-types'
import Label from '../atoms/Label'

const Field = (props) => (
  <>
    <Label htmlFor={props.name}>{props.label}</Label>
    {props.children}
  </>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Field
