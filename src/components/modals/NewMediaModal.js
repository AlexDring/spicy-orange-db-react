import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import omdbRouter from '../../services/omdb'

const NewMediaModalStyles = styled.div`
  background: var(--light-orange);
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px;
  max-width: 550px;
  img {
    max-width: 120px;
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

const NewMediaModal = ({ recId }) => {
  console.log(recId)
  const [data, setData] = useState('')

  useEffect(() => {
    async function fetchData() {
      if(recId) {
        const response = await omdbRouter.searchOMDb(`i=${recId}`)
        setData(response)
      }
    }
    fetchData()
  },[recId])

  const saveRecommendation = async () => {
    console.log(data)
  }
  
  if(!data) {
    return null
  } else {
    console.log(data)
    return(
      <NewMediaModalStyles>
        <img src={data.Poster} alt="" />
        <div style={{'textAlign': 'center', 'marginBottom': 24  }}>
          <h2 style={{'display': 'inline-block', 'marginBottom': 6, 'marginRight': 6}}>{data.Title} </h2>
          <span className="caps gray">  
            {data.Runtime !== 'N/A' && data.Year}  {data.Runtime !== 'N/A' && `• ${data.Runtime}`} {data.totalSeasons && `• ${data.totalSeasons} Seasons`}
          </span>
          <div>
            <small>
              {data.Genre} {data.imdbRating !== 'N/A' && ` • IMDb: ${data.imdbRating}/10`} {data.Metascore !== 'N/A' && ` • MetaCritic: ${data.Metascore}/100`}
            </small>
          </div>
        </div>  
        <p>{data.Plot}</p>
        <MediaInformationStyles>
          <li><span>Director</span><div>{data.Director}</div></li>
          <li><span>Writer</span><div>{data.Writer}</div></li>
          <li><span>Cast</span><div>{data.Actors}</div></li>
        </MediaInformationStyles>
        <button onClick={saveRecommendation}>Add to Recommendations</button>
      </NewMediaModalStyles>
    )
  }
}

NewMediaModal.propTypes = {
  recId: PropTypes.string
}

export default NewMediaModal