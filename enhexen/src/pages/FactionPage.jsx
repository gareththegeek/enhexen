import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchFaction } from '../hooks/factions'
import { FactionContext } from '../contexts/FactionContext'
import FactionStats from '../components/organisms/FactionStats'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'
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
      </Section>
      <FactionStats faction={faction} />
      {assets && <AssetList assets={assets} faction={faction} showHex={true} />}
      {npcs && <NpcList npcs={npcs} faction={faction} showHex={true} />}
    </>
  )
}

FactionPage.propTypes = {}

export default FactionPage
