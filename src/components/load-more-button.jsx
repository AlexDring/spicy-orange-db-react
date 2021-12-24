import styled from 'styled-components'
import { Loading } from './lib'
import PropTypes from 'prop-types'

const LoadMoreStyles = styled.div`
  display: flex; 
  justify-content: center; 
  margin-top: 30px;
`

const LoadMoreButton = ({ result }) => {
  const { isFetchingNextPage, isFetching, hasNextPage, fetchNextPage } = result

  return(
    <>
      <LoadMoreStyles>
        {hasNextPage && <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage
            ?  <Loading />
            : hasNextPage
              ? 'Load more'
              : 'Nothing else to load'}
        </button>}
      </LoadMoreStyles>
      <div>
        {isFetching && !isFetchingNextPage
          ? 'Background Updating...'
          : null}
      </div>
      {/* <div>{isFetching && !isFetchingNextPage ?  <Loading /> : null}</div> */}
    </>
  )
}


LoadMoreButton.propTypes = {
  result: PropTypes.object,
}

export default LoadMoreButton