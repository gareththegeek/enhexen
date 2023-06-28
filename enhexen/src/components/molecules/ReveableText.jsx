import PropTypes from 'prop-types'
import Field from './Field'
import Tickbox from '../atoms/Tickbox'
import P from '../atoms/P'

const RevealableText = ({ text, name, label, revealed, onRevealChange }) => (
  <Field name={name} label={label}>
    <Field name={`${name}-revealed`} label="Revealed">
      <Tickbox name="hidden-revealed" value={revealed} onChange={onRevealChange} />
    </Field>
    <P>{text}</P>
  </Field>
)

RevealableText.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  revealed: PropTypes.bool.isRequired,
  onRevealChange: PropTypes.func,
}

export default RevealableText
