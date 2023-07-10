import PropTypes from 'prop-types'
import H2 from '../atoms/H2'
import A from '../atoms/A'

const AdventureDetails = ({ adventure }) => {
  return (
    <>
      <H2>
        Adventure {adventure.name} ({adventure.level})
      </H2>
      <A to={adventure.hyperlink}>{adventure.hyperlink}</A>
    </>
  )
}

AdventureDetails.propTypes = {
  adventure: PropTypes.object.isRequired,
}

export default AdventureDetails
