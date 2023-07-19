import PropTypes from 'prop-types'
import Input from '../atoms/Input'
import Field from '../atoms/Field'

const TravelSpeed = ({ speed, onChange }) => (
  <Field label="Speed" name="speed" width="w-16" className="flex flex-col h-11">
    <Input
      type="number"
      onChange={onChange}
      value={speed}
      className="w-14 h-0"
    />
  </Field>
)

TravelSpeed.propTypes = {
  speed: PropTypes.number,
  onChange: PropTypes.func,
}

export default TravelSpeed
