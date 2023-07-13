import PropTypes from 'prop-types'
import Table from '../atoms/Table'
import KeyValue from '../atoms/KeyValue'

const NpcDetails = ({ npc }) => (
  <>
    <h1>NPC {npc.name}</h1>
    <Table>
      <tbody>
        <KeyValue label="Position" value={npc.position} />
        <KeyValue label="Source of Power" value={npc.sourceOfPower} />
        <KeyValue label="Residence" value={npc.residence} />
      </tbody>
    </Table>
  </>
)

NpcDetails.propTypes = {
  npc: PropTypes.object.isRequired,
}

export default NpcDetails
