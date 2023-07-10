import PropTypes from 'prop-types'
import H1 from '../atoms/H1'
import Table from '../atoms/Table'
import KeyValue from '../molecules/KeyValue'

const NpcDetails = ({ npc }) => (
  <>
    <H1>NPC {npc.name}</H1>
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
