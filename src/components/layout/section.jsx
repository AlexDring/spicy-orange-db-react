import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionStyles = styled.div`
background: ${props => props.orange ?  '#FFF8ED' : null};
section {
  padding: 48px 15px;
  max-width: 970px;
  margin: auto;
  @media(max-width: 450px) {
    padding: 48px 7.5px;
  }
}
`
const Section = ({ orange, children }) => (
  <SectionStyles orange={orange}>
    <section>
      {children}
    </section>
  </SectionStyles>
)

Section.propTypes = {
  orange: PropTypes.bool,
  children: PropTypes.node
}

export default Section