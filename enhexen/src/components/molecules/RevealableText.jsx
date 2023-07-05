import PropTypes from 'prop-types'
import Field from './Field'
import Tickbox from '../atoms/Tickbox'
import P from '../atoms/P'

const RevealableText = ({ text, name, label, revealed, onRevealChange }) => (
  <div>
    <div className="flex place-content-between">
      <h3>{label}</h3>
      <Field name={`${name}-revealed`} label="Revealed">
        <Tickbox
          name="hidden-revealed"
          value={revealed}
          onChange={onRevealChange}
        />
      </Field>
    </div>
    TODO figure out how we want to size these text area thingies
    <P className="border-2 border-black min-h-[100px]">{text}</P>
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
