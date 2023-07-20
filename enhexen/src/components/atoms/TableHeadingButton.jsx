import PropTypes from 'prop-types'
import Button from './Button'
import { mergeClass, noClass } from '../mergeClass'

const TableHeadingButton = ({ children, ...rest }) => (
  <th className={mergeClass(rest, 'relative h-12')}>
    <Button className="right-4 top-2 text-sm absolute" {...noClass(rest)}>
      {children}
    </Button>
  </th>
)

TableHeadingButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TableHeadingButton
