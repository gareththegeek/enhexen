import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import Button from '../atoms/Button'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'
import { useState } from 'react'

const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const RandomTable = ({ heading, items, onRoll }) => {
  const [selected, setSelected] = useState()
  const handleRoll = () => {
    const roll = randomInteger(0, items.length - 1)
    setSelected(roll)
    if (onRoll) {
      onRoll({
        roll,
        item: items[roll],
      })
    }
  }

  return (
    <>
      <div className="flex">
        <H2>{heading}</H2>
        <Button onClick={handleRoll}>Roll</Button>
      </div>
      {items?.length ? (
        <Table>
          <thead>
            <tr>
              <th>Roll</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {items
              .sort((x) => x.roll)
              .map(({ id, roll, description }, i) => (
                <tr
                  key={`${id}`}
                  className={i === selected ? 'selected-tr' : ''}
                >
                  <td>{roll}</td>
                  <td>{description}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <Placeholder>No encounters</Placeholder>
      )}
    </>
  )
}

RandomTable.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array,
  onRoll: PropTypes.func,
}

export default RandomTable
