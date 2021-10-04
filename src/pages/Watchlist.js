import MediaCard from '../components/MediaCard'
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
          {isLoading || isIdle ? 
            Array.from({length: 2}, (v, i) => <CardSkeleton key={`media-card-${i}`} />) :
            profile?.watchlist.map(p => <MediaCard key={p._id} singleMedia={p.media_id} />)
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