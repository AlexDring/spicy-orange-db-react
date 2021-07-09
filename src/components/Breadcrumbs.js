import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BreadcrumbStyles = styled.ul`
display: flex;
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

const routes = [
  {
    path: '/',
    breadcrumb: 'Home'
  },
  {
    path: '/recommendations',
    breadcrumb: 'Recommendations'
  },
  {
    path: '/recommendations/inception',
    breadcrumb: 'Inception'
  }
]

const Breadcumbs = () => {
  return(
    <BreadcrumbStyles>
      {routes.map(l => (
        // eslint-disable-next-line react/jsx-key
        <li>
          <Link to={l.path}>{l.breadcrumb}</Link>
        </li>
      ))}

    </BreadcrumbStyles>
  )
}

export default Breadcumbs