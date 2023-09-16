import useFetch from '../useFetch'

const useFetchSettlements = () => {
  const { data, mutate } = useFetch('settlements?populate=hex')
  return { settlements: data, mutateSettlements: mutate }
}

export default useFetchSettlements
