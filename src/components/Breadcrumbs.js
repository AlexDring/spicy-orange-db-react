import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BreadcrumbStyles = styled.ul`
display: flex;
flex-wrap: wrap;
 a {
   text-transform: uppercase;
   color: var(--gray);
   font-size: 12px;
 }
 li+li:before {
   content: '∕';
   font-size: 12px;
   padding: 3px;
   color: var(--gray);
 }
`

const Breadcrumbs = ({ routes }) => {
  return(
    <BreadcrumbStyles>
      {routes.map((l, i) => (
        <li key={i}>
          <Link to={l.path}>{l.breadcrumb}</Link>
        </li>
      ))}

    </BreadcrumbStyles>
  )
}

Breadcrumbs.propTypes = {
  routes: PropTypes.array
}

export default Breadcrumbs