import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useAddRecommendation } from '../../utils/recommendations'
import { useIndividualSearch } from '../../utils/search'
import { SearchResultSkeleton } from '../../utils/skeleton'
import { ErrorFallback } from '../lib'

const NewMediaModalStyles = styled.div`
  box-sizing: border-box;
  background: var(--light-orange);
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px;
  max-width: 550px;
  img {
    /* max-width: 120px; */
    max-height: 180px;
    object-fit: cover;
    margin: -110px auto 0;
    margin-bottom: 24px;
  }
  button {
    margin-top: 24px;
  }
`

const MediaInformationStyles = styled.ul`
  li {
    margin-bottom: 16px;
  }
  span {
    font-weight: 700;
    text-transform: uppercase;
    width: 100px;
    float: left;
    display: block;
  }
  div { 
    overflow: hidden;
  }
`

const NewMediaModal = ({ user, recId }) => {
  const {data: searchResult, isLoading, isIdle} = useIndividualSearch(recId)
  const create = useAddRecommendation(user)

  console.log(create.isError, create.error)
  
  if(isIdle) {
    return null
  }
  return(
    <>
      {isLoading ? <SearchResultSkeleton /> : (
        <NewMediaModalStyles>
          <img src={searchResult.Poster} alt="" />
          <div style={{'textAlign': 'center', 'marginBottom': 24  }}>
            <h2 style={{'display': 'inline-block', 'marginBottom': 6, 'marginRight': 6}}>{searchResult.Title} </h2>
            <span className="caps gray">  
              {searchResult.Runtime !== 'N/A' && searchResult.Year}  {searchResult.Runtime !== 'N/A' && `• ${searchResult.Runtime}`} {searchResult.totalSeasons && `• ${searchResult.totalSeasons} Seasons`}
            </span>
            <div>
              <small>
                {searchResult.Genre} {searchResult.imdbRating !== 'N/A' && ` • IMDb: ${searchResult.imdbRating}/10`} {searchResult.Metascore !== 'N/A' && ` • MetaCritic: ${searchResult.Metascore}/100`}
              </small>
            </div>
          </div>  
          <p>{searchResult.Plot}</p>
          <MediaInformationStyles>
            <li><span>Director</span><div>{searchResult.Director}</div></li>
            <li><span>Writer</span><div>{searchResult.Writer}</div></li>
            <li><span>Cast</span><div>{searchResult.Actors}</div></li>
          </MediaInformationStyles>
          {create.isError && <ErrorFallback error={create.error} />}
          <button onClick={() => create.mutate({...searchResult, date_added: new Date()})}>Add to Recommendations</button>
        </NewMediaModalStyles>
      )}
    </>
  )
}

NewMediaModal.propTypes = {
  recId: PropTypes.string,
  user: PropTypes.object
}

export default NewMediaModal