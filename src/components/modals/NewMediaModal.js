import styled from 'styled-components'
import PropTypes from 'prop-types'

const media = {'Title':'Close Encounters of the Third Kind','Year':'1977','Rated':'PG','Released':'14 Dec 1977','Runtime':'138 min','Genre':'Drama, Sci-Fi','Director':'Steven Spielberg','Writer':'Steven Spielberg, Hal Barwood, Jerry Belson','Actors':'Richard Dreyfuss, François Truffaut, Teri Garr','Plot':'Roy Neary, an electric lineman, watches how his quiet and ordinary daily life turns upside down after a close encounter with a UFO.','Language':'English, French, Spanish, Hindi','Country':'United States, United Kingdom','Awards':'Won 2 Oscars. 15 wins & 39 nominations total','Poster':'https://m.media-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1_SX300.jpg','Ratings':[{'Source':'Internet Movie Database','Value':'7.6/10'},{'Source':'Rotten Tomatoes','Value':'94%'},{'Source':'Metacritic','Value':'90/100'}],'Metascore':'90','imdbRating':'7.6','imdbVotes':'188,443','imdbID':'tt0075860','Type':'movie','DVD':'01 Jul 2012','BoxOffice':'$135,189,114','Production':'Columbia Pictures','Website':'N/A','Response':'True'}

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

const NewMediaModal = () => {
  return(
    <NewMediaModalStyles>
      <img src={media.Poster} alt="" />
      <div style={{'textAlign': 'center', 'marginBottom': 24  }}>
        <h2 style={{'display': 'inline-block', 'marginBottom': 6}}>{media.Title}</h2>
        <span className="caps gray">  
          {media.Runtime !== 'N/A' && media.Year}  {media.Runtime !== 'N/A' && `• ${media.Runtime}`} {media.totalSeasons && `• ${media.totalSeasons} Seasons`}
        </span>
        <div>
          <small>
            {media.Genre} {media.imdbRating !== 'N/A' && ` • IMDb: ${media.imdbRating}/10`} {media.Metascore !== 'N/A' && ` • MetaCritic: ${media.Metascore}/100`}
          </small>
        </div>
      </div>  
      <p>{media.Plot}</p>
      <MediaInformationStyles>
        <li><span>Director</span><div>{media.Director}</div></li>
        <li><span>Writer</span><div>{media.Writer}</div></li>
        <li><span>Cast</span><div>{media.Actors}</div></li>
      </MediaInformationStyles>
      <button>Add to Recommendations</button>
    </NewMediaModalStyles>
  )
}

NewMediaModal.propTypes = {
  media: PropTypes.object
}

export default NewMediaModal