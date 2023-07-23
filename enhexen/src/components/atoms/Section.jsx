import PropTypes from 'prop-types'
import { mergeClass, noClass } from '../mergeClass'

const Section = ({ heading, children, containerClassName, ...rest }) => (
  <section
    className={mergeClass(
      rest,
      'flex flex-col bg-grey-50 md:rounded md:drop-shadow'
    )}
    {...noClass(rest)}
  >
    <div className="heading p-4 md:px-8">{heading}</div>
    <div
      className={mergeClass(
        { className: containerClassName },
        `flex flex-col gap-8 p-4 md:px-8`
      )}
    >
      {children}
    </div>
  </section>
)

Section.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
  containerClassName: PropTypes.string,
}

export default Section
