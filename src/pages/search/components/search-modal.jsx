import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useAddRecommendation } from 'utils/recommendations'
import { useIndividualSearch } from 'utils/search'
import { SearchResultSkeleton } from 'utils/skeleton'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { useProfile } from 'utils/profile'


const SearchModalStyles = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px;
  > div {
    text-align: center; 
    margin-bottom: 24px;
  }
  h2 {
    display: inline-block; 
    margin-bottom: 6px; 
    margin-right: 6px;
  }
  img {
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
  margin-top: 16px;
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


// eslint-disable-next-line react/prop-types
const SearchModal = ({ recId, displayModal, setDisplayModal }) => {
  const {profile} = useProfile()
  const {data: searchResult, isLoading, isIdle } = useIndividualSearch(recId)
  const create = useAddRecommendation()

  if(isIdle) {
    return null
  }
  return(
    <Dialog isOpen={displayModal} onDismiss={() => setDisplayModal(false)} aria-label="search result modal">
      {isLoading ? <SearchResultSkeleton /> : (
        <SearchModalStyles>
          <img src={searchResult.Poster} alt="" />
          <div>
            <h2>{searchResult.Title} </h2>
            <span className="caps gray">  
              {searchResult.Runtime !== 'N/A' && searchResult.Year}  
              {searchResult.Runtime !== 'N/A' && `• ${searchResult.Runtime}`} 
              {searchResult.totalSeasons && `• ${searchResult.totalSeasons} Seasons`}
            </span>
            <div>
              <small>
                {searchResult.Genre} 
                {searchResult.imdbRating !== 'N/A' && ` • IMDb: ${searchResult.imdbRating}/10`} 
                {searchResult.Metascore !== 'N/A' && ` • MetaCritic: ${searchResult.Metascore}/100`}
              </small>
            </div>
          </div>  
          <p>{searchResult.Plot}</p>
          <MediaInformationStyles>
            <li><span>Director</span><div>{searchResult.Director}</div></li>
            <li><span>Writer</span><div>{searchResult.Writer}</div></li>
            <li><span>Cast</span><div>{searchResult.Actors}</div></li>
          </MediaInformationStyles>
          <button onClick={() => create.mutate(
            {
              user_id: profile._id, 
              ...searchResult, 
              date_added: new Date()
            })}>Add to Recommendations</button>
        </SearchModalStyles>
      )}
    </Dialog>

  )
}

SearchModal.propTypes = {
  recId: PropTypes.string,
  user: PropTypes.object
}

export default SearchModal