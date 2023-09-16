import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Section from '../atoms/Section'
import Field from '../atoms/Field'
import Select from '../atoms/Select'
import { useFetchSettlements } from '../../hooks/settlements'
import { HexContext } from '../../contexts/HexContext'

const SettlementSelect = ({ className }) => {
  const { settlements } = useFetchSettlements()
  const { reference, setReference } = useContext(HexContext)
  const navigate = useNavigate()

  settlements?.sort((a, b) => a.name > b.name)

  const handleChange = ({ value }) => {
    setReference(value)
    if (!value) {
      return
    }
    navigate(`/settlements/${value}`)
  }

  return (
    <Section heading={<h2>Select Faction</h2>} className={className}>
      <Field label="Faction" name="faction">
        <Select onChange={handleChange} value={reference}>
          <option>-select settlement-</option>
          {settlements?.map(({ hex: { reference }, name }) => (
            <option key={reference} value={reference}>
              {`${name} (${reference})`}
            </option>
          ))}
        </Select>
      </Field>
    </Section>
  )
}

SettlementSelect.propTypes = {
  className: PropTypes.string,
}

export default SettlementSelect
