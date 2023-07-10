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
    <div className="w-42 shrink-0 mx-auto md:mx-initial mt-4">
      <div className="flex">
        <Hex className="relative top-7 left-3" onClick={() => handleNavigate(upleft)}>{upleft}</Hex>
        <Hex onClick={() => handleNavigate(up)}>{up}</Hex>
        <Hex className="relative top-6 right-3" onClick={() => handleNavigate(upright)}>{upright}</Hex>
      </div>
      <div className="flex">
        <Hex className="relative bottom-1 left-14" selected={true}>{reference}</Hex>
      </div>
      <div className="flex">
        <Hex className="relative bottom-8 left-3" onClick={() => handleNavigate(downleft)}>{downleft}</Hex>
        <Hex className="relative bottom-2" onClick={() => handleNavigate(down)}>{down}</Hex>
        <Hex className="relative bottom-9 right-3" onClick={() => handleNavigate(downright)}>{downright}</Hex>
      </div>
    </div>
  )
}

HexNavigation.propTypes = {
  reference: PropTypes.string,
}

export default HexNavigation
