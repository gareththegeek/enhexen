import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import LI from '../atoms/LI'
import P from '../atoms/P'
import Button from '../atoms/Button'
import RelativeTime from '../atoms/RelativeTime'

const Entry = ({ entry, onDelete }) => (
  <LI className="flex gap-2">
    <RelativeTime value={DateTime.fromISO(entry.due, { zone: 'utc' })} />
    <P>{entry.name}</P>
    <Button onClick={() => onDelete(entry)}>X</Button>
  </LI>
)

Entry.propTypes = {
  entry: PropTypes.object,
  onDelete: PropTypes.func,
}

export default Entry
