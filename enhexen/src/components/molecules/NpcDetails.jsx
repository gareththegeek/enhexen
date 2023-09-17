import PropTypes from 'prop-types'
import Table from '../atoms/Table'
import KeyValue from '../atoms/KeyValue'

const NpcDetails = ({ npc, className }) => (
  <>
    <Table className={className}>
      <thead>
        <tr>
          <th colSpan={2}>{npc.name}</th>
        </tr>
      </thead>
      <tbody>
        <KeyValue label="Faction" value={npc.faction.name} />
        <KeyValue label="Position" value={npc.position} />
        <KeyValue label="Source of Power" value={npc.sourceOfPower} />
        <KeyValue label="Residence" value={npc.residence} />
      </tbody>
    </Table>
  </>
)

NpcDetails.propTypes = {
  npc: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default NpcDetails
