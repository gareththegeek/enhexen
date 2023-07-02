import put from '../put'

const putTimer = (timer) => put(`timers/${timer.id}`, timer)

export default putTimer
