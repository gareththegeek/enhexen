import withEditor from '../molecules/EditableTable'
import AddLog from './AddLog'
import LogTable from './LogTable'

const Log = withEditor({ form: <AddLog />, table: <LogTable /> })

export default Log
