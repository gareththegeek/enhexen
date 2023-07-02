import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchFaction } from '../hooks/factions'
import { FactionContext } from '../contexts/FactionContext'
import H1 from '../components/atoms/H1'
import FactionDetail from '../components/organisms/FactionDetail'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcList from '../components/organisms/NpcList'

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

  return (
    <>
      <H1>Faction</H1>
      {faction && <FactionDetail faction={faction} />}
      {faction?.domains?.map((domain) => (
        <DomainDetails key={domain.id} domain={domain} faction={faction} />
      ))}
      {faction?.assets && (
        <AssetList assets={faction.assets} faction={faction} showHex={true} />
      )}
      {faction?.npcs && (
        <NpcList npcs={faction.npcs} faction={faction} showHex={true} />
      )}
    </>
  )
}

FactionPage.propTypes = {}

export default FactionPage
