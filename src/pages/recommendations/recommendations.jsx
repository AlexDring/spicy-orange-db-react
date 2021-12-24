import Section from 'components/layout/section'
import LoadMoreButton from 'components/load-more-button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useRecommendations } from 'utils/recommendations'
import RecommendationsRow from './components/recommendations-row'
import { useState } from 'react'
import SearchInput from 'components/search-input'
import ItemCount from 'components/item-count'
import { RecommendationsRowSkeleton } from 'utils/skeleton'

const TopRowStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: 450px) {
    margin-bottom: 16px;
  }
`

const Recommendations = () => {
  const [search, setSearch] = useState()
  const result = useRecommendations(search)
  const itemCount = result.data?.pages[0].totalResults

  const searchRecommendations = (e) => {
    e.preventDefault()
    setSearch(e.target.elements.search.value)
  }

  return(
    <Section>
      <TopRowStyles>
        <h1>{
          search 
            ? `Results: ${search}` 
            : 'Recommendations' 
        } <ItemCount loading={result.isLoading} count={itemCount} background={'#FFB17A'} fontSize={'18px'} /></h1>
        <SearchInput
          onSubmit={searchRecommendations}
          placeholder={'Search recommendations'} 
        />
      </TopRowStyles>
      {result.isLoading && Array.from({length: 12}, (v, i) =>  <RecommendationsRowSkeleton key={`recommendation-card-${i}`} />)}
      <ul>
        {result.data?.pages.map(page => 
          page?.recommendations.map(recommentation =>
            <Link key={recommentation._id} to={`/recommendation/${recommentation._id}`}>
              <RecommendationsRow recommendation={recommentation} />
            </Link>
          )
        )}
      </ul>
      {result.isFetching && Array.from({length: 12}, (v, i) =>  <RecommendationsRowSkeleton key={`recommendation-card-${i}`}  />)}
      {result.data?.pages[0].recommendations.length !== 0 && <LoadMoreButton result={result} />}
    </Section>  
  )
}

export default Recommendations