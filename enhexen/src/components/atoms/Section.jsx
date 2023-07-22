import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Section = ({ heading, horizontal, children, ...rest }) => (
  <section
    className={mergeClass(
      rest,
      'flex flex-col bg-grey-50 md:rounded md:drop-shadow'
    )}
    {...noClass(rest)}
  >
    <div className="heading p-4">{heading}</div>
    <div
      className={`flex ${horizontal ? 'flex-col md:flex-row' : 'flex-col'} gap-4 p-4`}
    >
      {children}
    </div>
  </section>
)

Section.propTypes = {
  heading: PropTypes.node,
  horizontal: PropTypes.bool,
  children: PropTypes.node,
}

export default Section
