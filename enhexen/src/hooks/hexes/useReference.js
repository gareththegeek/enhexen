import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HexContext } from '../../contexts/HexContext'

const useReference = (route = '') => {
  const navigate = useNavigate()
  const { reference: referenceParam } = useParams()
  const { reference, setReference } = useContext(HexContext)
  useEffect(() => {
    if (referenceParam) {
      if (reference !== referenceParam) {
        setReference(referenceParam)
      }
    } else if (reference) {
      navigate(`${route}/${reference}`)
    }
  }, [navigate, route, reference, referenceParam, setReference])

  return reference
}

export default useReference
