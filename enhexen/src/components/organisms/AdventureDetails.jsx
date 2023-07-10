import PropTypes from 'prop-types'
import A from '../atoms/A'

const AdventureDetails = ({ adventure }) => {
  return (
    <>
      <h2>
        Adventure {adventure.name} ({adventure.level})
      </h2>
      <A to={adventure.hyperlink}>{adventure.hyperlink}</A>
    </>
  )
}

AdventureDetails.propTypes = {
  adventure: PropTypes.object.isRequired,
}

export default AdventureDetails
