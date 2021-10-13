import { RecommendationCard } from 'components/cards'
import { MediaCardGridStyles, SectionStyles } from '../styles/styles'
import PropTypes from 'prop-types'
import { useProfile } from '../utils/profile'
import { CardSkeleton } from '../utils/skeleton'

const Watchlist = ({ user }) => {
  const {profile, isLoading, isIdle} = useProfile(user)
  return(
    <SectionStyles>
      <section>
        <h1>Your Watchlist</h1>
        <MediaCardGridStyles>
          {/* {Array.from({length: 4}, (v, i) => <CardSkeleton key={`media-card-${i}`} />)} */}
          {isLoading || isIdle ? 
            Array.from({length: 4}, (v, i) => <CardSkeleton key={`media-card-${i}`} />) :
            profile?.watchlist.map(p => <RecommendationCard key={p._id} recommendation={p.media} />)
          }
        </MediaCardGridStyles>
      </section>
    </SectionStyles>
  )
}

Watchlist.propTypes = {
  user: PropTypes.object
}

export default Watchlist