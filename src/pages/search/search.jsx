import { useState } from 'react'
import PropTypes from 'prop-types'
import {AiOutlineSearch} from 'react-icons/ai'
import { MediaPosterGridStyles } from 'styles/grids'
import { useSearch } from 'utils/search'
import Section from 'components/layout/section'
import SearchModal from './components/search-modal'
import Skeleton from 'components/skeleton/skeleton'
import { useInfiniteQuery, useQuery } from 'react-query'
import axios from 'axios'
const baseUrl = '/api/omdb'

function Search({ user }) {
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)
  const [reccommendationId, setReccommendationId] = useState(null)
  const [displayModal, setDisplayModal] = useState(null)
  // const [page, setPage] = useState(1)
  // const {search, isSuccess, isLoading} = useSearch(query, queried)

  const fetchSearch = async ({pageParam = 1}) => {

    const response = await axios.get(`${baseUrl}/${query}/page=${pageParam}`)
    const pagesNo = Math.ceil(response.data.totalResults/10)
    return {results: response.data.Search, totalPages: pagesNo, nextPage: pageParam + 1 > pagesNo ? undefined : pageParam + 1}
  }
  
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(['search', {query}], fetchSearch, {
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    enabled: !!queried
  })

  console.log(data)
  const searchForm = async (e) => {
    e.preventDefault()
    setQuery(`s=${e.target.elements.search.value}`)
    setQueried(true)
  }
  console.log(hasNextPage)
  return(
    <>
      <SearchModal
        user={user}
        recId={reccommendationId}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <Section>
        <h1>Search</h1>
        <form onSubmit={searchForm}>
          <input
            type="text"
            id="search"
            placeholder={query ? query : 'Add recommendation'}  
          />
          <label htmlFor="search">
            <button>
              <AiOutlineSearch size={20} />
            </button>
          </label>
        </form>
        <div>
          {/* {!queried ? <p>Search for a film or tv show to add to the Spicy Orange Database.</p> : 
            isSuccess ? <p>Found {search?.totalResults} results. Find more film and tv shows with the search bar above.</p> : 
              null} */}
        </div>
        {/* <RecommendationsSmallGrid loading={isLoading} recommendations={search?.Search} /> */}
        
        <MediaPosterGridStyles>
          {data?.pages.map(search => (
            search.results.map((result, index) => (
              <div 
                style={{height: 350, overflow: 'hidden'}} 
                key={index}  // I think this should work, some duplicate results were causing an "Each child in a list should have a unique "key" prop." error. Although index shouldn't be used as a key, they won't be moving.
                onClick={() => {
                  setDisplayModal(!displayModal)
                  setReccommendationId(result.imdbID)
                }} >
                <img style={{objectFit: 'cover', height: '100%', width: '100%', cursor: 'pointer'}} src={result.Poster} />
              </div>
            ))
          ))}
          
          {/* {isLoading ? <Skeleton number={10} component={'recommendation-small'} /> : 
            isSuccess && search.Search ?
              <>
                {search.Search.map((searchResult, index) => (
                  <div 
                    style={{height: 350, overflow: 'hidden'}} 
                    key={`${searchResult._id}-${index}`}  // I think this should work, some duplicate results were causing an "Each child in a list should have a unique "key" prop." error. Although index shouldn't be used as a key, they won't be moving.
                    onClick={() => {
                      setDisplayModal(!displayModal)
                      setReccommendationId(searchResult.imdbID)
                    }} >
                    <img style={{objectFit: 'cover', height: '100%', width: '100%', cursor: 'pointer'}} src={searchResult.Poster} />
                  </div>
                ))}
              </> : 
              isSuccess && search.Error ? <div>Film or tv show not found.</div> : null} */}
        </MediaPosterGridStyles>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >{isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'No more results'}
        </button>
      </Section>
    </>
  )
}

Search.propTypes = {
  user: PropTypes.object
}

export default Search