import { useState } from 'react'
import { useQuery } from 'react-query'
// import Spinner from '../components/lib'
import MediaPoster from '../components/MediaPoster'
import omdbRouter from '../services/omdb'
import { SectionStyles, MediaPosterGridStyles } from '../styles/styles'


function Search() {
  const [query, setQuery] = useState(null)
  const [queried, setQueried] = useState(false)
  console.log(queried)
  const { data: search, isSuccess, isLoading } = useQuery({
    queryKey: ['mediaSearch', {query}],
    queryFn: () => omdbRouter.searchOMDb(query).then(data => data),
    enabled: !!query
  })
  console.log(search)
  
  const searchQuery = async (e) => {
    e.preventDefault()
    console.log(e.target.elements.search.value)
    setQuery(`s=${e.target.elements.search.value}`)
    setQueried(true)
  }

  return(
    <>
      <SectionStyles>
        <section>
          <h1>Search</h1>
          <form onSubmit={searchQuery}>
            <input type="text" placeholder="Add recommendation" id="search" />
            <label htmlFor="search">
              <button>
                <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="search-icon" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
              </button>
            </label>
          </form>
          {queried ? null : (
            <div css={{marginTop: 20, fontSize: '1.2em', textAlign: 'center'}}>
              <p>Search for a film or tv show to add to the Spicy Orange Database.</p>
              {isLoading ? (
                <div>
                  {/* <Spinner /> */}
                </div>
              ) : isSuccess && search.totalResults ? (
                <p>`Found ${search.totalResults} results`. Find more film and tv shows with the search bar above.</p>
              ) : isSuccess && !search.totalResults ? (
                <p>
                  No results.
                </p>
              ) : null}
            </div>)}
          {isSuccess ?
            <>
              <div>Found {search.totalResults} results</div>
              <MediaPosterGridStyles>
                {search.Search.map(singleMedia => (
                  <MediaPoster 
                    media={singleMedia}
                    key={singleMedia.imdbID} 
                    id={singleMedia._id} 
                    poster={singleMedia.Poster} 
                    rottenAverage={singleMedia.rottenAverage} 
                    rottenCount={singleMedia.rottenCount}
                    type={singleMedia.Type} />
                ))}
              </MediaPosterGridStyles>
            </>: null}
        </section>
      </SectionStyles>
    </>
  )
}

export default Search