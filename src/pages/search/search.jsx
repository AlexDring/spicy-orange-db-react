import { useState } from 'react'
import PropTypes from 'prop-types'
import {AiOutlineSearch} from 'react-icons/ai'
import { MediaPosterGridStyles } from 'styles/grids'
import { useSearch } from 'utils/search'
import Section from 'components/layout/section'
import SearchModal from './components/search-modal'
import Skeleton from 'components/skeleton/skeleton'

function Search({ user }) {
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)
  const [reccommendationId, setReccommendationId] = useState(null)
  const [displayModal, setDisplayModal] = useState(null)
  const {search, isSuccess, isLoading} = useSearch(query, queried)
  
  console.log(search)

  const searchForm = async (e) => {
    e.preventDefault()
    setQuery(`s=${e.target.elements.search.value}`)
    setQueried(true)
  }

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
          {!queried ? <p>Search for a film or tv show to add to the Spicy Orange Database.</p> : 
            isSuccess ? <p>Found {search?.totalResults} results. Find more film and tv shows with the search bar above.</p> : 
              null}
        </div>
        {/* <RecommendationsSmallGrid loading={isLoading} recommendations={search?.Search} /> */}
        
        <MediaPosterGridStyles>
          {isLoading ? <Skeleton number={10} component={'recommendation-small'} /> : 
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
              isSuccess && search.Error ? <div>Film or tv show not found.</div> : null}
        </MediaPosterGridStyles>
      </Section>
    </>
  )
}

Search.propTypes = {
  user: PropTypes.object
}

export default Search