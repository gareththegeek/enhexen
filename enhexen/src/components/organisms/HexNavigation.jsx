import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Placeholder from '../atoms/Placeholder'
import Hex from '../atoms/Hex'

const parseReference = (reference) => {
  const parts = reference.split('.')
  if (parts.length !== 2) {
    return undefined
  }
  if (parts.some((x) => isNaN(x))) {
    return undefined
  }
  return {
    x: parseInt(parts[0]),
    y: parseInt(parts[1]),
  }
}

const getAdjacentReferences = (reference) => {
  const coord = parseReference(reference)
  if (coord === undefined) {
    throw new Error(`Invalid reference '${reference}'`)
  }
  const { x, y } = coord
  const evenX = x % 2 == 0
  return {
    upleft: `${x - 1}.${y - (evenX ? 1 : 0)}`,
    up: `${x}.${y - 1}`,
    upright: `${x + 1}.${y - (evenX ? 1 : 0)}`,
    downleft: `${x - 1}.${y + (evenX ? 0 : 1)}`,
    down: `${x}.${y + 1}`,
    downright: `${x + 1}.${y + (evenX ? 0 : 1)}`,
  }
}

const HexNavigation = ({ reference }) => {
  const navigate = useNavigate()
  const handleNavigate = (reference) => {
    navigate(`/${reference}`)
  }

  if (!reference) {
    return <Placeholder>No Reference</Placeholder>
  }
  const { upleft, up, upright, downleft, down, downright } =
    getAdjacentReferences(reference)
  return (
    <>
      <div className="flex">
        <Hex onClick={() => handleNavigate(upleft)}>{upleft}</Hex>
        <Hex onClick={() => handleNavigate(up)}>{up}</Hex>
        <Hex onClick={() => handleNavigate(upright)}>{upright}</Hex>
      </div>
      <div className="flex">
        <Hex>{reference}</Hex>
      </div>
      <div className="flex">
        <Hex onClick={() => handleNavigate(downleft)}>{downleft}</Hex>
        <Hex onClick={() => handleNavigate(down)}>{down}</Hex>
        <Hex onClick={() => handleNavigate(downright)}>{downright}</Hex>
      </div>
    </>
  )
}

HexNavigation.propTypes = {
  reference: PropTypes.string,
}

export default HexNavigation
