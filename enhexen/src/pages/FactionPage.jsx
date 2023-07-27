import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchFaction } from '../hooks/factions'
import { FactionContext } from '../contexts/FactionContext'
import FactionStats from '../components/organisms/FactionStats'
import DomainDetails from '../components/organisms/DomainDetails'
import AssetList from '../components/organisms/AssetList'
import NpcTable from '../components/organisms/NpcTable'
import Section from '../components/atoms/Section'
import SidebySide from '../components/atoms/SideBySide'
import FactionSelect from '../components/organisms/FactionSelect'

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
    return <FactionSelect />
  }

  const { name, description, domains, assets, npcs } = faction

  return (
    <>
      <SidebySide>
        <Section heading={<h1>{name}</h1>} className="md:flex-2">
          <p>{description}</p>
          {domains?.map((domain) => (
            <DomainDetails key={domain.id} domain={domain} faction={faction} />
          ))}
          <FactionStats faction={faction} />
        </Section>
        <FactionSelect className="md:flex-1" />
      </SidebySide>
      <SidebySide>
        {assets && (
          <AssetList
            className="md:flex-1"
            assets={assets}
            faction={faction}
            showHex
          />
        )}
        {npcs && (
          <NpcTable className="flex-1" npcs={npcs} faction={faction} showHex />
        )}
      </SidebySide>
    </>
  )
}

FactionPage.propTypes = {}

export default FactionPage
