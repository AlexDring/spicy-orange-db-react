import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {AiOutlineSearch} from 'react-icons/ai'
import Section from 'components/layout/section'
import SearchModal from './components/search-modal'
import styled from 'styled-components'
import { RecommendationPosterCard } from 'components/cards'
import { useSearch } from 'utils/search'
import LoadMoreButton from 'components/load-more-button'

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(180px, 1fr));
  @media (max-width: 500px) {
    grid-template-columns: 48% 48%;
  }
  grid-gap: 15px;
  margin-top: 30px;
`

function Search({ user }) {
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)
  const [reccommendationId, setReccommendationId] = useState(null)
  const [displayModal, setDisplayModal] = useState(null)

  const result = useSearch(query, queried)
  console.log(result.data)

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
        <div style={{marginTop: 15}}>
          {!queried ? <p>Search for a film or tv show to add to the Spicy Orange Database.</p> : 
            result.isSuccess ? <p>Found {result.data?.pages[0].totalResults} results. Find more film and tv shows with the search bar above.</p> : 
              null}
        </div>
        <SearchGrid>
          {result.data?.pages.map(search => (
            search.results.map((result, index) => (
              <div  
                key={index}
                onClick={() => {
                  setDisplayModal(!displayModal)
                  setReccommendationId(result.imdbID)}} >
                <RecommendationPosterCard data={result} />
              </div>
            ))
          ))}
        </SearchGrid>
        {result.isSuccess && <LoadMoreButton result={result} />}
        {/* <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div> */}
      </Section>
    </>
  )
}

Search.propTypes = {
  user: PropTypes.object
}

export default Search