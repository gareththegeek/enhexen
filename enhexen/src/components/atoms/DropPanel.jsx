import PropTypes from 'prop-types'

const DropPanel = ({ heading, children }) => (
  <div
    className={`
    max-w-sm right-0 absolute z-50
    border-2 rounded-b-lg border-stone-900 drop-shadow-lg
    bg-stone-100`}
  >
    <div className="py-2 px-4 bg-stone-200 border-b-2 border-stone-300">{heading}</div>
    {children}
  </div>
)

DropPanel.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
}

export default DropPanel
