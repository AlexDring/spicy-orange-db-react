import MediaCard from '../components/MediaCard'
import { MediaCardGridStyles, SectionStyles } from '../styles/styles'
import PropTypes from 'prop-types'
import { useProfile } from '../utils/profile'

const Watchlist = ({ user }) => {
  const {profile} = useProfile(user)

  return(
    <SectionStyles>
      <section>
        <h1>Your Watchlist</h1>
        <MediaCardGridStyles>
          {profile?.watchlist.map(p => <MediaCard key={p._id} singleMedia={p.media_id} />)}
        </MediaCardGridStyles>
      </section>
    </SectionStyles>
  )
}

Watchlist.propTypes = {
  user: PropTypes.object
}

export default Watchlist