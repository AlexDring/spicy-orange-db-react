import { useState } from 'react'
import { useQuery } from 'react-query'
import { Spinner } from '../components/lib'
import Modal from '../components/modals/Modal'
import NewMediaModal from '../components/modals/NewMediaModal'
import { SectionStyles, MediaPosterGridStyles } from '../styles/styles'
import PropTypes from 'prop-types'
import { useSearch } from '../utils/search'

function Search({searchQuery}) {
  const [query, setQuery] = searchQuery
  const [queried, setQueried] = useState(false)
  const [reccommendationId, setReccommendationId] = useState(null)
  const [displayModal, setDisplayModal] = useState()

  const {search, isSuccess, isLoading} = useSearch(query)
  
  const searchForm = async (e) => {
    e.preventDefault()
    setQuery(`s=${e.target.elements.search.value}`)
    setQueried(true)
  }

  return(
    <>
      <Modal 
        displayModal={displayModal} 
        setDisplayModal={setDisplayModal}
      >
        <NewMediaModal recId={reccommendationId} />
      </Modal>
      <SectionStyles>
        <section>
          <h1>Search</h1>
          <form onSubmit={searchForm}>
            <input
              type="text"
              id="search"
              placeholder={query ? query : 'Add recommendation'}  
            />
            <label htmlFor="search">
              <button>
                <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="search-icon" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
              </button>
            </label>
          </form>
          {!queried ? <p>Search for a film or tv show to add to the Spicy Orange Database.</p> : 
            isSuccess && search.totalResults ? <p>Found {search.totalResults} results. Find more film and tv shows with the search bar above.</p> : null}
          {isLoading ? <div><Spinner /></div> : 
            isSuccess && search.Search ?
              <>
                <MediaPosterGridStyles>
                  {search.Search.map(singleMedia => (
                    <div 
                      style={{height: 350, overflow: 'hidden'}} 
                      key={singleMedia._id} 
                      onClick={() => {
                        setDisplayModal(!displayModal)
                        setReccommendationId(singleMedia.imdbID)
                      }} >
                      <img style={{objectFit: 'cover', height: '100%', width: '100%', cursor: 'pointer'}} src={singleMedia.Poster} />
                    </div>
                  ))}
                </MediaPosterGridStyles>
              </> : 
              isSuccess && search.Error ? <div>Film or tv show not found.</div> : null}
        </section>
      </SectionStyles>
    </>
  )
}

Search.propTypes = {
  searchQuery: PropTypes.array
}

export default Search