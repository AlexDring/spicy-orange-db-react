import React, { useContext, useState } from 'react'
import Section from 'components/layout/section'
import SearchModal from './components/search-modal'
import styled from 'styled-components'
import { RecommendationPosterCard } from 'components/cards'
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
  const [reccommendationId, setReccommendationId] = useState(null)
  const [displayModal, setDisplayModal] = useState(null)
  const { searchResults, searchQuery } = useContext(SearchContext)
  const resultsReturned = searchResults.data?.pages[0].totalResults
  console.log(searchResults)
  return(
    <>
      <SearchModal
        recId={reccommendationId}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <Section>
        <h1>Search {searchQuery && `- ${searchQuery.substring(2)}`}</h1>
        <div style={{marginTop: 15}}>
          {!searchResults.isSuccess ? <p>Search for a film or tv show to add to the Spicy Orange Database.</p> : 
            searchResults.data.pages[0].error ? <p>{searchResults.data.pages[0].error} Please try again.</p> :
              resultsReturned ? <>
                <p>Found {resultsReturned} results. If you can&apos;t find the recommendation in the results below, try copy and pasting the imdb url into the search bar above.</p>
              </> : null
          }
        </div>
        <SearchGrid>
          {searchResults.data?.pages[0].results && // This shows if incorrect link pasted in search bar.
          searchResults.data?.pages.map(search => (
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
        {resultsReturned && <LoadMoreButton result={searchResults} />}
      </Section>
    </>
  )
}

export default Search