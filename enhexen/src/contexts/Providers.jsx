import PropTypes from 'prop-types'
import { HexProvider } from './HexContext'
import { FactionProvider } from './FactionContext'

const providers = [HexProvider, FactionProvider]

const Providers = ({ children }) => (
  <>
    {providers.reduceRight((acc, Provider) => {
      return <Provider>{acc}</Provider>
    }, children)}
  </>
)

Providers.propTypes = {
  children: PropTypes.node,
}

export default Providers
