import PropTypes from 'prop-types'
import { putHex } from '../../hooks/hexes'
import RevealableText from '../molecules/RevealableText'

const HexDetails = ({ hex }) => {
  const handleRevealChange = (name) => (nextRevealed) => {
    hex[name] = nextRevealed
    putHex(hex)
  }

  return (
    <>
      <RevealableText
        name="landmark"
        label="Landmark"
        text={hex.landmark}
        revealed={hex.landmarkRevealed}
        onRevealChange={handleRevealChange('landmarkRevealed')}
      />
      <RevealableText
        name="hidden"
        label="Hidden"
        text={hex.hidden}
        revealed={hex.hiddenRevealed}
        onRevealChange={handleRevealChange('hiddenRevealed')}
      />
      <RevealableText
        name="secret"
        label="Secret"
        text={hex.secret}
        revealed={hex.secretRevealed}
        onRevealChange={handleRevealChange('secretRevealed')}
      />
    </>
  )
}

HexDetails.propTypes = {
  hex: PropTypes.object.isRequired,
}

export default HexDetails
