import PropTypes from 'prop-types'
import Field from '../molecules/Field'
import P from '../atoms/P'

const HexDetails = ({ landmark, hidden, secret }) => (
  <>
    <Field name="landmark" label="Landmark">
      <P>{landmark}</P>
    </Field>
    {hidden && (
      <Field name="hidden" label="Hidden">
        <P>{hidden}</P>
      </Field>
    )}
    {secret && (
      <Field name="secret" label="Secret">
        <P>{secret}</P>
      </Field>
    )}
  </>
)

HexDetails.propTypes = {
  landmark: PropTypes.string,
  hidden: PropTypes.string,
  secret: PropTypes.string,
}

export default HexDetails
