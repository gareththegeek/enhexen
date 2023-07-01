import PropTypes from 'prop-types'
import { HexProvider } from './HexContext'
import { FactionProvider } from './FactionContext'
import { ClockProvider } from './ClockContext'

const providers = [HexProvider, FactionProvider, ClockProvider]

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
