import { useContext } from 'react'
import PropTypes from 'prop-types'
import { LogContext } from '../../contexts/LogContext'
import Section from '../atoms/Section'
import useFetchLog from '../../hooks/logs/useFetchLog'

const Log = ({ className }) => {
  const { searchText } = useContext(LogContext)
  const { entries, mutateEntries } = useFetchLog(searchText)
  return (
    <Section className={className} heading={<h1>Log Entries</h1>}>
      <ul>
        {entries?.map(({ id, text }) => (
          <li key={id}>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

Log.propTypes = {
  className: PropTypes.string,
}

export default Log
