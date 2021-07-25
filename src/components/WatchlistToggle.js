import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addToWatchlist, fetchProfile, removeFromWatchlist } from '../reducers/profileSlice'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const WatchlistToggleStyles = styled.div`
  display: flex;
  /* margin-bottom: 6px; */
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

const WatchlistToggle = ({ mediaId }) => {
  const dispatch = useDispatch()
  const profileId = useSelector(state => state.loggedInUser.user.profile_id)
  const profile = useSelector(state => state.profile.data)
  const profileStatus = useSelector(state => state.profile.status)

  useEffect(() => {
    if(profileStatus === 'idle') {
      console.log('runs')
      dispatch(fetchProfile(profileId))
    }
  }, [profileStatus, dispatch])

  let itemExists
  if(profile !== null) {
    itemExists = profile.watchlist.find(w => w.media_id === mediaId)
  }
  
  const Toggle = () => {
    if(!itemExists) {
      console.log('togglewatchAdd')
      dispatch(addToWatchlist({ profileId, media_id: mediaId, date_added: new Date() }))
    } else {
      console.log('togglewatchRemove')
      dispatch(removeFromWatchlist({ profileId, watchlistId: itemExists._id }))
    }
  }

  return(
    <WatchlistToggleStyles>
      <span onClick={() => Toggle()}>
        { itemExists ? <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="16px"><path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path></svg> In your Watchlist </span> : 
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  height="15px">
            <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"/></svg> Add to Watchlist </span>}
      </span>
    </WatchlistToggleStyles>
  )
}

WatchlistToggle.propTypes = {
  mediaId: PropTypes.string
}

export default WatchlistToggle