import { useState } from 'react'
import PropTypes from 'prop-types'
import { randomInteger } from '../../maths'
import Table from '../atoms/Table'
import Placeholder from '../atoms/Placeholder'
import ButtonHeading from './ButtonHeading'

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
      <ButtonHeading
        heading={heading}
        button="Roll"
        handleClick={handleRoll}
        showButton={!!items?.length}
      />
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
        <Placeholder>There are no worthy encounters to be found in this place!</Placeholder>
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
