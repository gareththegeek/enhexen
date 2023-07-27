import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Section from '../atoms/Section'
import Field from '../atoms/Field'
import Select from '../atoms/Select'
import { useFetchFactions } from '../../hooks/factions'
import { FactionContext } from '../../contexts/FactionContext'

const FactionSelect = ({ className }) => {
  const { factions } = useFetchFactions()
  const { id: factionId, setId } = useContext(FactionContext)
  const navigate = useNavigate()

  const handleChange = ({ value }) => {
    setId(value)
    if (!value) {
      return
    }
    navigate(`/factions/${value}`)
  }

  return (
    <Section heading={<h2>Select Faction</h2>} className={className}>
      <Field label="Faction" name="faction">
        <Select onChange={handleChange} value={factionId}>
          <option>-select faction-</option>
          {factions?.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </Field>
    </Section>
  )
}

FactionSelect.propTypes = {
  className: PropTypes.string,
}

export default FactionSelect
