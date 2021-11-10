import Section from 'components/layout/section'
import LoadMoreButton from 'components/load-more-button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useRecommendations } from 'utils/recommendations'
import RecommendationsRow from './components/recommendations-row'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

const TopRowStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const RecommendationsSearchStyles = styled.form`
  margin-bottom: 16px;
  input {
    height: 42px;
    font-size: 14px;
    width: 100%;
    max-width: 300px;
  }
  > button {
    background: transparent;
    margin-left: -30px;
    padding: 0;
    > svg {
      fill: var(--gray);
      position: relative;
      top: 4px;
      right: 2px;
    }
  }
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
        <h1>{search ? `Results - ${search}` : 'Recommendations'}</h1>
        <RecommendationsSearchStyles role="search" onSubmit={searchRecommendations} >
          <input id="search" type="search" placeholder="Search recommendations" />
          <button vale='Submit' type='submit' > 
            <AiOutlineSearch size={20} />
          </button>
        </RecommendationsSearchStyles>
      </TopRowStyles>
      <ul>
        {result.data?.pages.map(page =>
          page?.recommendations.map(recommentation =>
            <Link key={recommentation._id} to={`/recommendation/${recommentation._id}`}>
              <RecommendationsRow recommendation={recommentation} />
            </Link>
          )
        )}
      </ul>
      {result.isSuccess && <LoadMoreButton result={result} />}
    </Section>  
  )
}

export default Recommendations