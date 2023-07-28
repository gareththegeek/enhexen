import { useContext } from 'react'
import PropTypes from 'prop-types'
import { LogContext } from '../../contexts/LogContext'
import Section from '../atoms/Section'
import SearchBox from '../molecules/SearchBox'

const LogSearch = ({ className }) => {
  const { setSearchText } = useContext(LogContext)

  const handleSearch = async (value) => {
    setSearchText(value)
  }
  return (
    <Section className={className} heading={<h2>Log Search</h2>}>
      <SearchBox label="Search logs" name="log-search" onSearch={handleSearch} />
    </Section>
  )
}

LogSearch.propTypes = {
  className: PropTypes.string,
}

export default LogSearch
