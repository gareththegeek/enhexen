import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PubSubContext = createContext()

const createPubSub = () => {
  const topics = {}
  const publish = (topic, message) => {
    topics[topic]?.forEach((handler) => handler(message))
  }
  const subscribe = (topic, handler) => {
    topics[topic] = [...(topic[topic] || []), handler]
  }
  const unsubscribe = (topic, handler) => {
    topics[topic] = topics[topic].filter((x) => x !== handler)
  }
  return { publish, subscribe, unsubscribe }
}

export const PubSubProvider = ({ children }) => {
  const [pubsub, setPubSub] = useState(createPubSub())
  return (
    <PubSubContext.Provider value={{ pubsub, setPubSub }}>
      {children}
    </PubSubContext.Provider>
  )
}

PubSubProvider.propTypes = {
  children: PropTypes.node,
}
