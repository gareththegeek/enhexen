import { useContext } from 'react'
import { PubSubContext } from '../../contexts/PubSubContext'

const usePublish = (topic) => {
  const { pubsub } = useContext(PubSubContext)
  return (message) => {
    pubsub.publish(topic, message)
  }
}

export default usePublish
