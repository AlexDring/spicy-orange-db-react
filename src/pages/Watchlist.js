import { useQuery } from 'react-query'
import MediaCard from '../components/MediaCard'
import { MediaCardGridStyles, SectionStyles } from '../styles/styles'
import PropTypes from 'prop-types'
import profileRouter from '../services/profile'

const Watchlist = ({ user }) => {
  const {data: profile} = useQuery({
    queryKey: ['profile', user.profile_id],
    queryFn: () => profileRouter.getWatchlist(user.profile_id).then(data => data)
  })

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