import { useFetchFactions } from '../hooks/factions'
import Link from '../components/atoms/Link'
import Placeholder from '../components/atoms/Placeholder'

const FactionSelectPage = () => {
  const { factions } = useFetchFactions()
  return (
    <>
      <h1>Factions</h1>
      {factions ? (
        <ul>
          {factions.map((faction) => (
            <li key={faction.id}>
              <Link to={`/factions/${faction.id}`}>{faction.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <Placeholder>Loading factions..</Placeholder>
      )}
    </>
  )
}

FactionSelectPage.propTypes = {}

export default FactionSelectPage
