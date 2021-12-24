import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RecommendationsSearchStyles = styled.form`
  input {
    height: 42px;
    font-size: 14px;
    width: 100%;
    max-width: 300px;
  }
  > button {
    background: transparent;
    margin-left: -30px;
    padding: 0;
    > svg {
      fill: var(--gray);
      position: relative;
      top: 4px;
      right: 2px;
    }
  }
`

const SearchInput = ({ onSubmit, placeholder }) => {
  return(
    <RecommendationsSearchStyles role="search" onSubmit={onSubmit} >
      <input id="search" type="search" placeholder={placeholder} />
      <button vale='Submit' type='submit' > 
        <AiOutlineSearch size={20} />
      </button>
    </RecommendationsSearchStyles>
  )
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string
}

export default SearchInput