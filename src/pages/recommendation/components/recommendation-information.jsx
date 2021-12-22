/* eslint-disable react/prop-types */
import styled from 'styled-components'

const RecommendationInfoWrapper = styled.div`
  padding-top: 48px;
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
      <p>{recommendation.Plot}</p>
      <RecommendationInfoUlStyles>
        <RecommendationInfoLi role={'Director'} item={recommendation.Director}/>
        <RecommendationInfoLi role={'Writer'} item={recommendation.Writer}/>
        <RecommendationInfoLi role={'Cast'} item={recommendation.Actors}/>
        <RecommendationInfoLi role={'Production'} item={recommendation.Production}/>
        <RecommendationInfoLi role={'Awards'} item={recommendation.Awards}/>
        <RecommendationInfoLi role={'Box Office'} item={recommendation.BoxOffice}/>
      </RecommendationInfoUlStyles>
    </RecommendationInfoWrapper>
  )
}

export default RecommendationInformation