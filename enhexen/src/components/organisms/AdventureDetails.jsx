import PropTypes from 'prop-types'
import A from '../atoms/A'
import Section from '../atoms/Section'

const AdventureDetails = ({ adventure }) => {
  return (
    <Section heading={<h2>Adventure</h2>}>
      <p>
        {adventure.name} a module for adventurers level {adventure.level} is to
        be found here!
      </p>
      <A to={adventure.hyperlink}>{adventure.hyperlink}</A>
    </Section>
  )
}

AdventureDetails.propTypes = {
  adventure: PropTypes.object.isRequired,
}

export default AdventureDetails
