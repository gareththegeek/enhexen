import PropTypes from 'prop-types'
import { HexProvider } from './HexContext'
import { FactionProvider } from './FactionContext'
import { ClockProvider } from './ClockContext'
import { PubSubProvider } from './PubSubContext'
import { UserProvider } from './UserContext'

const providers = [
  HexProvider,
  FactionProvider,
  ClockProvider,
  PubSubProvider,
  UserProvider,
]

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
