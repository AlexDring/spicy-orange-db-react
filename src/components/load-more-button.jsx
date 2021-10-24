/* eslint-disable react/prop-types */

import styled from 'styled-components'

const LoadMoreStyles = styled.div`
  display: flex; 
  justify-content: center; 
  margin-top: 30;
`

const LoadMoreButton = ({ result }) => {
  const { isFetchingNextPage, isFetching, hasNextPage, fetchNextPage } = result

  return(
    <>
      <LoadMoreStyles>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load more'
              : 'Nothing else to load'}
        </button>
      </LoadMoreStyles>
      <div>
        {isFetching && !isFetchingNextPage
          ? 'Background Updating...'
          : null}
      </div>
    </>
  )
}

export default LoadMoreButton