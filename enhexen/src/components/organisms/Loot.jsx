import withEditor from '../molecules/EditableTable'
import AddLoot from './AddLoot'
import LootTable from './LootTable'

const Loot = withEditor({ form: <AddLoot />, table: <LootTable /> })

export default Loot
