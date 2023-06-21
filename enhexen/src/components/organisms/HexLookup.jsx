import PropTypes from 'prop-types'
import SearchBox from '../molecules/SearchBox'
import { useState } from 'react'

const HexLookup = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    onSearch(value)
  }

  return (
    <SearchBox
      name="reference"
      label="Reference"
      placeholder="e.g. 21.23"
      onChange={handleOnChange}
      onClick={handleClick}
    />
  )
}

HexLookup.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default HexLookup
