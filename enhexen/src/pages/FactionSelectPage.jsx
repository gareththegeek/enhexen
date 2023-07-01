import useFetchFactions from '../hooks/useFetchFactions'
import H1 from '../components/atoms/H1'
import UL from '../components/atoms/UL'
import LI from '../components/atoms/LI'
import Link from '../components/atoms/Link'
import Placeholder from '../components/atoms/Placeholder'

const FactionSelectPage = () => {
  const { factions } = useFetchFactions()
  return (
    <>
      <H1>Factions</H1>
      {factions ? (
        <UL>
          {factions.map((faction) => (
            <LI key={faction.id}>
              <Link to={`/factions/${faction.id}`}>{faction.name}</Link>
            </LI>
          ))}
        </UL>
      ) : (
        <Placeholder>Loading factions..</Placeholder>
      )}
    </>
  )
}

FactionSelectPage.propTypes = {}

export default FactionSelectPage
