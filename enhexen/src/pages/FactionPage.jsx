import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchFaction } from '../hooks/factions'
import { FactionContext } from '../contexts/FactionContext'
import FactionStats from '../components/organisms/FactionStats'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcTable from '../components/organisms/NpcTable'
import Section from '../components/atoms/Section'

const FactionPage = () => {
  const navigate = useNavigate()
  const { id: idParam } = useParams()
  const { id, setId } = useContext(FactionContext)
  useEffect(() => {
    if (idParam) {
      if (id !== idParam) {
        setId(idParam)
      }
    } else if (id) {
      navigate(`/factions/${id}`)
    }
  }, [navigate, id, idParam, setId])
  const { faction } = useFetchFaction(id)

  if (!faction) {
    return <Section heading="Faction">Loading faction..</Section>
  }

  const { name, description, domains, assets, npcs } = faction

  return (
    <>
      <Section heading={<h1>{name}</h1>}>
        <p>{description}</p>
        {domains?.map((domain) => (
          <DomainDetails key={domain.id} domain={domain} faction={faction} />
        ))}
        <FactionStats faction={faction} />
      </Section>
      <div className="md:flex gap-8">
        {assets && (
          <AssetList className="md:flex-1" assets={assets} faction={faction} showHex />
        )}
        {npcs && <NpcTable className="flex-1" npcs={npcs} faction={faction} showHex />}
      </div>
    </>
  )
}

FactionPage.propTypes = {}

export default FactionPage
