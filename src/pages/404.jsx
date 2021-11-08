import Section from 'components/layout/section'
import { Link } from 'react-router-dom'
import Ga404 from 'assets/images/ga-404.png'
import styled from 'styled-components'

const PageNotFoundStyles = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  a {
    font-weight: 600;
  }
  img {
    margin-right: 16px;
  }
  div {
    text-align: center;
    @media(max-width: 750px) {
      order: -1;
      margin-bottom: 16px;
    }
  }
`

const PageNotFound = () => {
  return(
    <Section>
      <PageNotFoundStyles>
        <img src={Ga404} alt="" />
        <div>
          <h1>404</h1>
          <p>Ooops, this page doesn’t exist.</p>
          <p>Try the <Link to='/'>home</Link> page or <Link to='/recommendations'>recommendations</Link> instead.</p>
        </div>
      </PageNotFoundStyles>
    </Section>
  )
}

export default PageNotFound