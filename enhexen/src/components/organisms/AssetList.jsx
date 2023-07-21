import PropTypes from 'prop-types'
import Asset from '../molecules/Asset'
import Section from '../atoms/Section'
import Placeholder from '../atoms/Placeholder'

const AssetList = ({ assets, faction, showHex, className }) => {
  if (!assets?.length) {
    return (
      <Section className={className} heading={<h2>Assets</h2>}>
        <Placeholder>There are no assets currently stationed here</Placeholder>
      </Section>
    )
  }

  return (
    <Section className={`${className}`} heading={<h2>Assets</h2>}>
      {assets.map((asset) => (
        <Asset
          key={asset.id}
          asset={asset}
          faction={faction}
          showHex={showHex}
        />
      ))}
    </Section>
  )
}

AssetList.propTypes = {
  assets: PropTypes.array,
  faction: PropTypes.object,
  showHex: PropTypes.bool,
  className: PropTypes.string,
}

export default AssetList
