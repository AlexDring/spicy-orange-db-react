
import {useAddWatchlist, useRemoveWatchlist, useWatchlistItem} from 'utils/profile'
import {FaBookmark, FaRegBookmark} from 'react-icons/fa'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useAsync } from 'utils/hooks'
import { BiErrorCircle } from 'react-icons/bi'
import { Loading } from 'components/lib'
import { useProfile } from 'utils/profile'

const WatchlistToggleStyles = styled.div`
  display: flex;
  span {
    font-size: 14px;
    cursor: pointer;
    display: flex; 
    align-items: center; 
    /* margin-right: 12px */
  }
  svg {
    margin-right: 6px;
  }
`

const WatchlistToggle = ({ recommendationId }) => {
  const { profile, isLoading } = useProfile()
  const create = useAddWatchlist()
  const remove = useRemoveWatchlist()
  const item = profile?.watchlist.find(i => i.recommendationId === recommendationId)

  return(
    <WatchlistToggleStyles>
      {item ? 
        <IconButton 
          loading={isLoading}
          label={'In your Watchlist'}
          icon={<FaBookmark/>}
          onClick={() => remove.mutateAsync({
            watchlistId: item._id,
            recommendationId
          })} 
        /> :
        <IconButton 
          loading={isLoading}
          label={'Add to Watchlist'}
          icon={<FaRegBookmark />}
          onClick={() => 
            create.mutateAsync({ 
              recommendationId, 
              dateAdded: new Date()
            })
          } 
        />}
    </WatchlistToggleStyles>
  )
}

function IconButton({loading, label, icon, onClick}) {
  const { isLoading, isError, error, run, reset } = useAsync()

  function handleClick() {
    if(isError) {
      reset()
    } else {
      run(onClick())
    }
  }

  return(
    <span onClick={onClick}>
      <span style={{color: isError && 'red', fontSize: isError && '12px'}}>
        {
          loading ? <Loading /> : isError ? <BiErrorCircle /> : icon} 
        {isError ? error : label}
      </span>
    </span>
  )
}

WatchlistToggle.propTypes = {
  recommendationId: PropTypes.string,
}

IconButton.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
}

export default WatchlistToggle