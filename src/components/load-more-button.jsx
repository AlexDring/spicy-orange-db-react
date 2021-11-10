/* eslint-disable react/prop-types */

import styled from 'styled-components'
import { Loading } from './lib'

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

export default LoadMoreButton