import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Section = ({ heading, children, ...rest }) => (
  <section
    className={mergeClass(
      rest,
      'flex flex-col bg-stone-50 rounded drop-shadow'
    )}
    {...noClass(rest)}
  >
    <div className="heading px-4 py-2">
      {heading}
    </div>
    <div className="flex flex-col gap-4 p-4">{children}</div>
  </section>
)

Section.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
}

export default Section
