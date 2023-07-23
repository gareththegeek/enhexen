import PropTypes from 'prop-types'
import Input from '../atoms/Input'
import Field from '../atoms/Field'

const TravelSpeed = ({ speed, onChange }) => (
  <Field label="Travel Speed" name="speed" labelWidth="w-22" className="h-11">
    <Input
      type="number"
      onChange={onChange}
      value={speed}
      className="w-full"
    />
  </Field>
)

TravelSpeed.propTypes = {
  speed: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
}

export default TravelSpeed
