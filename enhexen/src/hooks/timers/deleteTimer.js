import delet3 from '../delet3'

const deleteTimer = ({ id }) => delet3(`timers/${id}`)

export default deleteTimer
