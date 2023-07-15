import PropTypes from 'prop-types'

const Npc = ({ npc: { name, position, sourceOfPower, residence } }) => (
  <div className="flex flex-col">
    <span>{`${name} of ${residence}`}</span>
    <span className="text-sm text-stone-600">{position}</span>
    <span className="text-xs text-stone-600">{sourceOfPower}</span>
  </div>
)

Npc.propTypes = {
  npc: PropTypes.object.isRequired,
}

export default Npc
