import withEditor from '../molecules/EditableTable'
import AddTimer from './AddTimer'
import TimersTable from './TimersTable'

const Timers = withEditor({ form: <AddTimer />, table: <TimersTable /> })

export default Timers
