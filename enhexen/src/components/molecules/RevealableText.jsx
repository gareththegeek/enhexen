import PropTypes from 'prop-types'
import Field from '../atoms/Field'
import Tickbox from '../atoms/Tickbox'

const RevealableText = ({ text, name, label, revealed, onRevealChange }) => (
  <div>
    <div className="flex place-content-between sm:place-content-start gap-1">
      <h3>{label}</h3>
      <Field name={`${name}-revealed`} width="w-20" label="Revealed">
        <Tickbox
          name="hidden-revealed"
          value={revealed}
          onChange={onRevealChange}
        />
      </Field>
    </div>
    <p className="max-h-64 sm:max-h-32 overflow-y-auto">
      {text || 'None'}
    </p>
  </div>
)

RevealableText.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  revealed: PropTypes.bool.isRequired,
  onRevealChange: PropTypes.func,
}

export default RevealableText
