import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Form from '../components/molecules/Form'
import Section from '../components/atoms/Section'

const API_BASE = import.meta.env.VITE_API_BASE

const authUrls = {
  login: `${API_BASE}/auth/local`,
  register: `${API_BASE}/auth/local/register`,
  'forgot-password': `${API_BASE}/auth/forgot-password`,
  'reset-password': `${API_BASE}/`,
}

const definitions = {
  login: {
    heading: 'Login',
    fields: [
      { name: 'identifier', label: 'Username', type: 'text' },
      { name: 'password', label: 'Password', type: 'password' },
      { name: 'rememberMe', label: 'Remember me', type: 'tickbox' },
    ],
    links: [
      { label: 'Forgot your password?', to: '/auth/forgot-password' },
      // { label: 'Register for an account', to: '/auth/register' },
    ],
  },
  register: {
    heading: 'Register',
    fields: [
      { name: 'username', label: 'Username', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'password', label: 'Password', type: 'password' },
      // { name: 'confirm', label: 'Confirm Password', type: 'password' },
      { name: 'rememberMe', label: 'Remember me', type: 'tickbox' },
    ],
    links: [{ label: 'Already have an account', to: '/auth/login' }],
  },
  'forgot-password': {
    heading: 'Forgot Password',
    fields: [{ name: 'email', label: 'Email', type: 'text' }],
    links: [{ label: 'Return to login', to: '/auth/login' }],
  },
  'reset-password': {
    heading: 'Password Reset',
    fields: [
      { name: 'identifier', label: 'Username', type: 'text' },
      { name: 'password', label: 'Password', type: 'password' },
      { name: 'confirm', label: 'Confirm Password', type: 'password' },
    ],
  },
}

//https://strapi.io/blog/protected-routes-and-authentication-with-react-and-node-js-1
const AuthPage = () => {
  const { authType } = useParams()
  const navigate = useNavigate()
  const { login } = useContext(UserContext)
  const [errors, setError] = useState()

  useEffect(() => {
    setError(undefined)
  }, [authType])

  const handleSubmit = async (body) => {
    const url = authUrls[authType]
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (response.status !== 200) {
        const { error } = await response.json()
        const nextErrors = error.details.errors || [error]
        setError(nextErrors.map(({ message }) => message))
        return
      }

      if (authType === 'forgot-password') {
        navigate('/auth/forgot-password/sent')
        return
      }

      const user = await response.json()
      login(user, Boolean(body.rememberMe))
      navigate('/')
    } catch (e) {
      setError([e.message])
    }
  }

  const definition = definitions[authType]
  if (!definition) {
    navigate('/')
    return
  }

  return (
    <Section heading={<h1>{definition.heading}</h1>}>
      <Form onSubmit={handleSubmit} definition={definition} errors={errors} />
    </Section>
  )
}

AuthPage.propTypes = {}

export default AuthPage
