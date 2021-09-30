import {useAddWatchlist, useRemoveWatchlist, useWatchlistItem} from '../utils/profile'
import {FaBookmark, FaRegBookmark} from 'react-icons/fa'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const WatchlistToggleStyles = styled.div`
  display: flex;
  span {
    cursor: pointer;
    display: flex; 
    align-items: center; 
    margin-right: 12px
  }
  svg {
    margin-right: 6px;
  }
`

const WatchlistToggle = ({ user, mediaId }) => {
  const item = useWatchlistItem(user, mediaId)
  const create = useAddWatchlist()
  const remove = useRemoveWatchlist()

  return(
    <WatchlistToggleStyles>
      <span onClick={
        item ? 
          () => remove.mutate({profile_id: user.profile_id, watchlist_id: item._id}) : 
          () => create.mutate({profile_id: user.profile_id, media_id: mediaId, date_added: new Date()})
      }>
        {item ? 
          <span><FaBookmark/> In your Watchlist</span> : 
          <span><FaRegBookmark /> Add to Watchlist</span>
        }
      </span>
    </WatchlistToggleStyles>
  )
}

WatchlistToggle.propTypes = {
  mediaId: PropTypes.string,
  user: PropTypes.object
}

export default WatchlistToggle