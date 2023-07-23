import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mergeClass, noClass } from '../mergeClass'
import { HexContext } from '../../contexts/HexContext'
import SearchBox from './SearchBox'

const HexLookup = ({ initialValue, labelWidth, horizontal, ...rest }) => {
  const [value, setValue] = useState(initialValue)
  const navigate = useNavigate()
  const { setReference } = useContext(HexContext)

  const handleClick = () => {
    setReference(value)
    navigate(`/${value}`)
  }

  const handleOnChange = ({ value }) => {
    setValue(value)
  }

  return (
    <SearchBox
      className={mergeClass(rest)}
      name="reference"
      label="Reference"
      placeholder="e.g. 21.23"
      onChange={handleOnChange}
      onClick={handleClick}
      labelWidth={labelWidth}
      horizontal={horizontal}
      {...noClass(rest)}
    />
  )
}

HexLookup.propTypes = {
  initialValue: PropTypes.string,
  labelWidth: PropTypes.string,
  horizontal: PropTypes.bool,
}

export default HexLookup
