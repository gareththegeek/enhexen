import { useState } from 'react'
import PropTypes from 'prop-types'
import { randomInteger } from '../../helpers/maths'
import Table from '../atoms/Table'
import Section from '../atoms/Section'
import Button from '../atoms/Button'
import Placeholder from '../atoms/Placeholder'

const RandomTable = ({
  items,
  onRoll,
  heading,
  placeholder,
  className,
  includeParent,
}) => {
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

  const renderRow = ({ id, roll, description, parent }, i) => (
    <tr key={`${id}`} className={i === selected ? 'selected-tr' : ''}>
      <td>{roll}</td>
      {includeParent && <td>{parent}</td>}
      <td>{description}</td>
    </tr>
  )

  if (!items?.length) {
    return (
      <Section className={className} heading={<h2>{heading}</h2>}>
        <Placeholder>{placeholder}</Placeholder>
      </Section>
    )
  }

  return (
    <Table className={className}>
      <thead>
        <tr>
          <th colSpan={includeParent ? 3 : 2}>
            <div className="flex justify-between">
              <span className="me-4">{heading}</span>
              <div>
                <Button onClick={() => setExpanded(!expanded)}>
                  {expanded ? 'Collapse' : 'Expand'}
                </Button>
                <Button onClick={handleRoll} primary>
                  Roll
                </Button>
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
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  items: PropTypes.array,
  onRoll: PropTypes.func,
  includeParent: PropTypes.bool,
}

export default RandomTable
