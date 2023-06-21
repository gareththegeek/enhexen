import PropTypes from 'prop-types'

const RegionDetails = ({ region }) => (
    <section>
        <h2>{region.name}</h2>
    </section>
)

RegionDetails.propTypes = {
    region: PropTypes.object
}

export default RegionDetails
