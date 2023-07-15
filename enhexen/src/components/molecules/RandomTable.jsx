import { useState } from 'react'
import PropTypes from 'prop-types'
import { randomInteger } from '../../maths'
import Table from '../atoms/Table'
import Section from '../atoms/Section'
import HeadingButton from '../atoms/HeadingButton'
import Placeholder from '../atoms/Placeholder'

const RandomTable = ({ items, onRoll, heading, placeholder }) => {
  const [selected, setSelected] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const handleRoll = () => {
    const roll = randomInteger(0, items.length - 1)
    setSelected(roll)
    setIsSelected(true)
    if (onRoll) {
      onRoll({
        roll,
        item: items[roll],
      })
    }
  }

  const renderRow = ({ id, roll, description }, i) => (
    <tr key={`${id}`} className={i === selected ? 'selected-tr' : ''}>
      <td>{roll}</td>
      <td>{description}</td>
    </tr>
  )

  if (!items?.length) {
    return (
      <Section heading={<h2>{heading}</h2>}>
        <Placeholder>{placeholder}</Placeholder>
      </Section>
    )
  }

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>
            <div className="flex justify-between">
              <span className="me-4">{heading}</span>
              <div>
                <HeadingButton onClick={() => setExpanded(!expanded)}>
                  {expanded ? 'Collapse' : 'Expand'}
                </HeadingButton>
                <HeadingButton onClick={handleRoll} primary>
                  Roll
                </HeadingButton>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {expanded ? (
          items.sort((x) => x.roll).map(renderRow)
        ) : isSelected ? (
          renderRow(items[selected])
        ) : (
          <tr>
            <td colSpan={2}>Roll to generate a result</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

RandomTable.propTypes = {
  heading: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  items: PropTypes.array,
  onRoll: PropTypes.func,
}

export default RandomTable
