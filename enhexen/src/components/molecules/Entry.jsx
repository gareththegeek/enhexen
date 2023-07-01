import PropTypes from 'prop-types'
import LI from '../atoms/LI'
import P from '../atoms/P'
import Button from '../atoms/Button'
import RelativeTime from '../atoms/RelativeTime'
import { toDateTime } from '../../dates'

const Entry = ({ entry, onDelete, onRenew }) => (
  <LI className="flex gap-2">
    <RelativeTime value={toDateTime(entry.due)} />
    <P>{entry.name}</P>
    {onRenew && <Button onClick={() => onRenew(entry)}>↺</Button>}
    {onDelete && <Button onClick={() => onDelete(entry)}>X</Button>}
  </LI>
)

Entry.propTypes = {
  entry: PropTypes.object,
  onDelete: PropTypes.func,
  onRenew: PropTypes.func,
}

export default Entry
