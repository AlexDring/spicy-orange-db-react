import styled from 'styled-components'
import { Loading } from './lib'

const ItemCountStyles = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.fontSize || 'inherit'};
  background: ${props => props.background || '#FFFDED'};
  font-family: var(--san-serif);
  font-weight: 400;
  margin-left: 2px;
  padding: 3px 7px;
  border: 0px solid;
  border-radius: 10%;
`

// eslint-disable-next-line react/prop-types
const ItemCount = ({ count, loading, fontSize, background }) => {
  return(
    <ItemCountStyles fontSize={fontSize} background={background}>
      <span>{loading ? <Loading /> : count}</span>
    </ItemCountStyles>
  )
}

export default ItemCount