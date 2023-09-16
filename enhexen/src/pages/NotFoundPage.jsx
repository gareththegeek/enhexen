import Section from '../components/atoms/Section'
import HexLookup from '../components/molecules/HexLookup'

const NotFoundPage = () => (
  <Section heading="Not found">
    <p>
      The page you requested could not be found even though I looked really hard
    </p>
    <HexLookup />
  </Section>
)

export default NotFoundPage
