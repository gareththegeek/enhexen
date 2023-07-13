import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Section = ({ heading, children, ...rest }) => (
  <section
    className={mergeClass(
      rest,
      'flex flex-col bg-zinc-50 rounded drop-shadow'
    )}
    {...noClass(rest)}
  >
    <div className="bg-zinc-800 rounded-t px-4 py-2 text-zinc-50 font-bold">
      {heading}
    </div>
    <div className="p-4">{children}</div>
  </section>
)

Section.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
}

export default Section
