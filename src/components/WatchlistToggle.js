import styled from 'styled-components'
import PropTypes from 'prop-types'
import profileRouter from '../services/profile'
import { useEffect, useState } from 'react'
import { useQueryClient, useMutation, useQuery } from 'react-query'

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

const WatchlistToggle = ({ user, mediaId }) => {
  const queryClient = useQueryClient()
  const [itemExists, setItemExists] = useState()

  const {data: profile} = useQuery({
    queryKey: ['profile', user.profile_id],
    queryFn: () => profileRouter.getWatchlist(user.profile_id).then(data => data)
  })

  useEffect(() => {
    if(profile !== null) {
      const item = profile?.watchlist.find(w => w.media_id._id === mediaId)
      setItemExists(item)
    }
  }, [mediaId, profile])

  const create = useMutation(
    updates => profileRouter.saveToWatchlist(updates),
    {onSettled: () => queryClient.invalidateQueries('profile')}
  )

  const remove = useMutation(
    updates => profileRouter.removeFromWatchlist(updates),
    {onSettled: () => queryClient.invalidateQueries('profile')}
  )

  return(
    <WatchlistToggleStyles>
      <span onClick={
        itemExists ? 
          () => remove.mutate({ profile_id: user.profile_id, watchlist_id: itemExists._id }) : 
          () => create.mutate({ profile_id: user.profile_id, media_id: mediaId, date_added: new Date() })
      }>
        { itemExists ? <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="16px"><path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path></svg> In your Watchlist </span> : 
          <span><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="16px"><path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg> Add to Watchlist </span>}
      </span>
    </WatchlistToggleStyles>
  )
}

WatchlistToggle.propTypes = {
  mediaId: PropTypes.string,
  user: PropTypes.object
}

export default WatchlistToggle