import PropTypes from 'prop-types'
import { useProfile } from 'utils/profile'
import Section from 'components/layout/section'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import { Loading } from 'components/lib'

const Watchlist = () => {
  const {profile, isLoading} = useProfile()
  const totalItems = profile?.watchlist.length

  return(
    <Section>
      <h1>Your Watchlist • {isLoading ? <Loading /> : totalItems} items</h1>
      <RecommendationsGrid
        loading={isLoading}
        recommendations={profile?.watchlist}
        skeletonCount={8}
      />
    </Section>
  )
}

export default Watchlist