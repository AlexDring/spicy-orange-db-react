import { useState } from 'react'
import { Spinner } from '../components/lib'
import {AiOutlineSearch} from 'react-icons/ai'
import Modal from '../components/modals/Modal'
import NewMediaModal from '../components/modals/NewMediaModal'
import { SectionStyles, MediaPosterGridStyles } from '../styles/styles'
import PropTypes from 'prop-types'
import { useSearch } from '../utils/search'

function Search({searchQuery}) {
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)
  const [reccommendationId, setReccommendationId] = useState(null)
  const [displayModal, setDisplayModal] = useState(null)

  const {search, isSuccess, isLoading} = useSearch(query, queried)

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
                <AiOutlineSearch size={20} />
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