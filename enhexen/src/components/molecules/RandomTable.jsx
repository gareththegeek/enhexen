import { useState } from 'react'
import PropTypes from 'prop-types'
import { randomInteger } from '../../maths'
import H2 from '../atoms/H2'
import IconButton from '../atoms/IconButton'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'

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
    <section className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between md:justify-start">
        <H2>{heading}</H2>
        <IconButton onClick={handleRoll}>Roll</IconButton>
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
    </section>
  )
}

RandomTable.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array,
  onRoll: PropTypes.func,
}

export default RandomTable
