import put from '../put'

const putClock = (now) => put(`global`, { now })

export default putClock
