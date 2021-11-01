/* eslint-disable react/prop-types */
import styled from 'styled-components'

const RecommendationInfoWrapper = styled.section`
  padding: 0;
  p {
    max-width: 750px;
  }
`

const RecommendationInfoUlStyles = styled.ul`
  padding-top: 16px;
  li {
    margin-bottom: 16px;
  }
  span {
    font-weight: 700;
    text-transform: uppercase;
    width: 150px;
    display: inline-block;
    margin-right: 16px;
    @media(max-width: 450px) {
      width: 100%;
    }
  }
`
const RecommendationInfoLi = ({role, item}) => ((item === 'N/A' || !item) ? null : <li><span>{role}</span>{item}</li>)

const RecommendationInformation = ({ recommendation }) => {
  return (
    <RecommendationInfoWrapper>
      <h2>{recommendation.Title} Information</h2>
      <p>{recommendation.mediaDetail.Plot}</p>
      <RecommendationInfoUlStyles>
        <RecommendationInfoLi role={'Director'} item={recommendation.Director}/>
        <RecommendationInfoLi role={'Writer'} item={recommendation.mediaDetail.Writer}/>
        <RecommendationInfoLi role={'Cast'} item={recommendation.mediaDetail.Actors}/>
        <RecommendationInfoLi role={'Production'} item={recommendation.mediaDetail.Production}/>
        <RecommendationInfoLi role={'Awards'} item={recommendation.mediaDetail.Awards}/>
        <RecommendationInfoLi role={'Box Office'} item={recommendation.mediaDetail.BoxOffice}/>
      </RecommendationInfoUlStyles>
    </RecommendationInfoWrapper>
  )
}

export default RecommendationInformation