import PropTypes from 'prop-types'

const DropPanel = ({ heading, children }) => (
  <div
    className={`
    max-w-sm right-0 absolute z-50
    border-2 rounded-b-lg border-grey-900 drop-shadow-lg
    bg-grey-100`}
  >
    <div className="py-2 px-4 bg-grey-200 border-b-2 border-grey-300">{heading}</div>
    {children}
  </div>
)

DropPanel.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
}

export default DropPanel
