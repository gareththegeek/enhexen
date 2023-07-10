import { useState } from 'react'
import { useSubscribe } from '../../hooks/pubsub'
import { randomInteger } from '../../maths'
import Dice from '../atoms/Dice'

const EncounterRoll = () => {
  const [encounterRoll, setEncounterRoll] = useState(3)
  const handleClockChange = () => {
    setEncounterRoll(randomInteger(1, 6))
  }

  useSubscribe('CLOCK_CHANGE', handleClockChange)
  
  return (
    <div className="flex flex-row gap-4">
      <h2>Encounter Roll</h2>
      <Dice roll={encounterRoll} highlight={[1]} />
    </div>
  )
}

export default EncounterRoll
