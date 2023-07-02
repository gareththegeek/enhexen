import put from '../put'

const putHex = (hex) => put(`hexes/${hex.id}`, hex)

export default putHex
