import { useFetchFactions } from '../hooks/factions'
import Link from '../components/atoms/Link'
import Placeholder from '../components/atoms/Placeholder'
import Section from '../components/atoms/Section'

const FactionSelectPage = () => {
  const { factions } = useFetchFactions()
  return (
    <>
      <Section heading={<h1>Factions</h1>}>
        {factions ? (
          <ul className="flex flex-col items-center">
            {factions.map((faction) => (
              <li key={faction.id}>
                <Link to={`/factions/${faction.id}`}>{faction.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <Placeholder>Loading factions..</Placeholder>
        )}
      </Section>
    </>
  )
}

FactionSelectPage.propTypes = {}

export default FactionSelectPage
