import styled from 'styled-components'
import { Loading } from './lib'
import PropTypes from 'prop-types'

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

const ItemCount = ({ count, loading, fontSize, background }) => {
  return(
    <ItemCountStyles fontSize={fontSize} background={background}>
      <span>{loading ? <Loading /> : count}</span>
    </ItemCountStyles>
  )
}

ItemCount.propTypes = {
  count: PropTypes.number,
  loading: PropTypes.bool,
  fontSize: PropTypes.string,
  background: PropTypes.string
}

export default ItemCount