import styled from 'styled-components'
import { Loading } from './lib'

const ItemCountStyles = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.fontSize || 'inherit'};
  background: var(--light-yellow);
  font-family: var(--san-serif);
  font-weight: 400;
  margin-left: 2px;
  padding: 2px 5px;
  border: 0px solid;
  border-radius: 10%;
`

// eslint-disable-next-line react/prop-types
const ItemCount = ({ count, loading, fontSize }) => {
  return(
    <ItemCountStyles fontSize={fontSize}>
      <span>{loading ? <Loading /> : count}</span>
    </ItemCountStyles>
  )
}

export default ItemCount