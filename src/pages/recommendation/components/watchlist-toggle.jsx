/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {useAddWatchlist, useRemoveWatchlist, useWatchlistItem} from 'utils/profile'
import {FaBookmark, FaRegBookmark} from 'react-icons/fa'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useAsync } from 'utils/hooks'
import { BiErrorCircle } from 'react-icons/bi'
import { Loading } from 'components/lib'
import { useProfile } from 'utils/profile'
import { useRefetchWatchlist } from 'utils/profile'
import { useEffect } from 'react'

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

const WatchlistToggle = ({ recommendationId, recommendationDetailId }) => {
  const { profile } = useProfile()
  const create = useAddWatchlist()
  const remove = useRemoveWatchlist()
  const refetchWatchlist = useRefetchWatchlist()
  const item = profile?.watchlist.find(i => i.recommendation === recommendationId)

  useEffect(() => {
    return () => refetchWatchlist()
  }, [refetchWatchlist])

  return(
    <WatchlistToggleStyles>
      {item ? 
        <IconButton 
          label={'In your Watchlist'}
          icon={<FaBookmark/>}
          onClick={() => remove.mutateAsync({
            watchlist_id: item._id,
            recommendation_detail_id: recommendationDetailId
          })} 
        /> :
        <IconButton 
          label={'Add to Watchlist'}
          icon={<FaRegBookmark />}
          onClick={() => create.mutateAsync({ 
            recommendation: recommendationId, 
            recommendation_detail_id: recommendationDetailId, 
            date_added: new Date()
          })} 
        />}
    </WatchlistToggleStyles>
  )
}

function IconButton({label, icon, onClick}) {
  const { isLoading, isError, error, run, reset } = useAsync()

  function handleClick() {
    if(isError) {
      reset()
    } else {
      run(onClick())
    }
  }

  return(
    <span onClick={handleClick}>
      <span style={{color: isError && 'red', fontSize: isError && '12px'}}>
        {
          isLoading ? <Loading /> : isError ? <BiErrorCircle /> : icon} 
        {isError ? error : label}
      </span>
    </span>
  )
}

WatchlistToggle.propTypes = {
  mediaId: PropTypes.string,
  user: PropTypes.object,
}

export default WatchlistToggle