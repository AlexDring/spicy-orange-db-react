import React, { useContext, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Section from 'components/layout/section'
import SearchModal from './components/search-modal'
import styled from 'styled-components'
import { RecommendationPosterCard } from 'components/cards'
import { useSearch } from 'utils/search'
import LoadMoreButton from 'components/load-more-button'
import { SearchContext } from 'context/search-context'

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(180px, 1fr));
  @media (max-width: 500px) {
    grid-template-columns: 48% 48%;
  }
  grid-gap: 15px;
  margin-top: 30px;
`

function Search() {
  const [query, setQuery] = useState()
  const [reccommendationId, setReccommendationId] = useState(null)
  const [displayModal, setDisplayModal] = useState(null)
  const { searchQuery } = useContext(SearchContext)

  const result = useSearch(searchQuery)

  return(
    <>
      <SearchModal
        recId={reccommendationId}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <Section>
        <h1>Search</h1>
        <div style={{marginTop: 15}}>
          {!query ? <p>Search for a film or tv show to add to the Spicy Orange Database.</p> : 
            result.isSuccess ? <p>Found {result.data?.pages[0].totalResults} results. Find more film and tv shows with the search bar above.</p> : 
              null}
        </div>
        <SearchGrid>
          {result.isSuccess && result.data?.pages.map(search => {
            console.log(search)
            return (search.results.map((result, index) => (
              <div  
                key={index}
                onClick={() => {
                  setDisplayModal(!displayModal)
                  setReccommendationId(result.imdbID)}} >
                <RecommendationPosterCard data={result} />
              </div>
            ))
            )})}
        </SearchGrid>
        {result.isSuccess && <LoadMoreButton result={result} />}
        {/* <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div> */}
      </Section>
    </>
  )
}

export default Search