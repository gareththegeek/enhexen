import PropTypes from 'prop-types'
import Button from '../atoms/Button'

const Paginator = ({ pagination: { page, pageCount }, onPage }) => {
  return (
    <div className="flex float-right">
      {onPage && (
        <Button
          secondary
          disabled={page === 1}
          title="Previous"
          onClick={() => onPage(page - 1)}
        >
          &lt;
        </Button>
      )}
      <div className="m-1 mx-2">{`Page ${page} of ${pageCount}`}</div>
      {onPage && (
        <Button
          secondary
          disabled={page === pageCount}
          title="Next"
          onClick={() => onPage(page + 1)}
        >
          &gt;
        </Button>
      )}
    </div>
  )
}

Paginator.propTypes = {
  pagination: PropTypes.object,
  onPage: PropTypes.func,
}

export default Paginator
