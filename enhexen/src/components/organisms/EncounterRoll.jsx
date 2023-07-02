import { useState } from 'react'
import { useSubscribe } from '../../hooks/pubsub'
import { randomInteger } from '../../maths'
import H2 from '../atoms/H2'
import Dice from '../atoms/Dice'

const EncounterRoll = () => {
  const [encounterRoll, setEncounterRoll] = useState(3)
  const handleClockChange = () => {
    setEncounterRoll(randomInteger(1, 6))
  }

  useSubscribe('CLOCK_CHANGE', handleClockChange)
  
  return (
    <section>
      <H2>Encounter Roll</H2>
      <Dice roll={encounterRoll} highlight={[1]} />
    </section>
  )
}

export default EncounterRoll
