import Link from '../components/atoms/Link'
import Section from '../components/atoms/Section'

const AuthResetPasswordSent = () => (
  <Section heading={<h1>Password Reset Sent</h1>}>
    <p>An email has been sent to your email address</p>
    <Link className="m-auto" to="/auth/login">Return to login</Link>
  </Section>
)

export default AuthResetPasswordSent
