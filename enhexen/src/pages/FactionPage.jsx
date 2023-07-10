import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchFaction } from '../hooks/factions'
import { FactionContext } from '../contexts/FactionContext'
import H1 from '../components/atoms/H1'
import FactionDetail from '../components/organisms/FactionDetail'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'
import Placeholder from '../components/atoms/Placeholder'

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
    return <Placeholder>Loading faction..</Placeholder>
  }

  const { name, domains, assets, npcs } = faction

  return (
    <>
      <section>
        <H1>Faction {name}</H1>
        <FactionDetail faction={faction} />
        {domains?.map((domain) => (
          <DomainDetails key={domain.id} domain={domain} faction={faction} />
        ))}
      </section>
      <section>
        {assets && (
          <AssetList assets={assets} faction={faction} showHex={true} />
        )}
      </section>
      <section>
        {npcs && <NpcList npcs={npcs} faction={faction} showHex={true} />}
      </section>
    </>
  )
}

FactionPage.propTypes = {}

export default FactionPage
