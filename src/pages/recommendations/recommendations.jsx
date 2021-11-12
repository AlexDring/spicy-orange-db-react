import Section from 'components/layout/section'
import LoadMoreButton from 'components/load-more-button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useRecommendations } from 'utils/recommendations'
import RecommendationsRow from './components/recommendations-row'
import { useState } from 'react'
import SearchInput from 'components/search-input'
import { FullPageSpinner } from 'components/lib'

const TopRowStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Recommendations = () => {
  const [search, setSearch] = useState()
  const result = useRecommendations(search)

  const searchRecommendations = (e) => {
    e.preventDefault()
    setSearch(e.target.elements.search.value)
  }

  return(
    <Section>
      <TopRowStyles>
        <h1>{search ? 
        `Results: ${search} - ${result.data?.pages[0].totalResults} items` : 
        `Recommendations - ${result.data?.pages[0].totalResults} items`}</h1>
        <SearchInput
          onSubmit={searchRecommendations}
          placeholder={'Search recommendations'} 
        />
      </TopRowStyles>
      {result.isLoading && <FullPageSpinner />}
      <ul>
        {result.data?.pages.map(page => 
          page?.recommendations.map(recommentation =>
            <Link key={recommentation._id} to={`/recommendation/${recommentation._id}`}>
              <RecommendationsRow recommendation={recommentation} />
            </Link>
          )
        )}
      </ul>
      {result.data?.pages[0].recommendations.length !== 0 && <LoadMoreButton result={result} />}
    </Section>  
  )
}

export default Recommendations