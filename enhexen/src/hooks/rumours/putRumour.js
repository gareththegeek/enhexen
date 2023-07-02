import put from '../put'

const putRumour = (rumour) => put(`rumours/${rumour.id}`, rumour)

export default putRumour
