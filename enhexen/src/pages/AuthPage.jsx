import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Form from '../components/molecules/Form'

// TODO
const authUrls = {
  login: 'http://localhost:1337/api/auth/local',
  register: 'http://localhost:1337/api/auth/local/register',
  'forgot-password': 'http://localhost:1337/api/',
  'reset-password': 'http://localhost:1337/api/',
}

const definitions = {
  login: {
    heading: 'Login',
    fields: [
      { name: 'identifier', label: 'Username', type: 'text' },
      { name: 'password', label: 'Password', type: 'password' },
      { name: 'rememberMe', label: 'Remember me', type: 'tickbox' },
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
  },
  'forgot-password': {
    heading: 'Forgotten Password',
    fields: [{ name: 'identifier', label: 'Username', type: 'text' }],
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
  const { setUser } = useContext(UserContext)

  const handleSubmit = async (body) => {
    if (authType === 'forgot-password') {
      // TODO
      body.url = 'http://localhost:5173/auth/reset-password'
    }

    const url = authUrls[authType]
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const { jwt, user } = await response.json()

      setUser({
        jwt,
        user,
      })
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  const definition = definitions[authType]
  if (!definition) {
    navigate('/')
    return
  }

  return <Form onSubmit={handleSubmit} definition={definition} />
}

AuthPage.propTypes = {}

export default AuthPage
