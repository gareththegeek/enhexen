import PropTypes from 'prop-types'
import P from '../atoms/P'
import H2 from '../atoms/H2'
import A from '../atoms/A'

const AdventureDetails = ({ adventure }) => {
  return (
    <section>
      <H2>Adventure</H2>
      <P>
        {adventure.name} ({adventure.level})
      </P>
      <A to={adventure.hyperlink}>{adventure.hyperlink}</A>
    </section>
  )
}

AdventureDetails.propTypes = {
  adventure: PropTypes.object.isRequired,
}

export default AdventureDetails
