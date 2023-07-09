import { useContext, useEffect } from 'react'
import { PubSubContext } from '../../contexts/PubSubContext'

const useSubscribe = (topic, handler) => {
  const { pubsub } = useContext(PubSubContext)
  useEffect(() => {
    pubsub.subscribe(topic, handler)
    return () => pubsub.unsubscribe(topic, handler)
  }, [pubsub, topic, handler])
}

export default useSubscribe
