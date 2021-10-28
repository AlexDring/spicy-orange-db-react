import PropTypes from 'prop-types'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useHistory } from 'react-router'
import { useSearch } from 'utils/search'

const OMDbSearch = ({setSearchQuery}) => {
  const history = useHistory()
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)

  const searchQuery = async (e) => {
    e.preventDefault()
    setQuery(`s=${e.target.elements.search.value}`)
    setQueried(true)
    history.push('/search')
  }
  
  const result = useSearch(query, queried) 
  
  return(
    <form onSubmit={searchQuery}>
      <input type="text" placeholder="Add recommendation" id="search" />
      <button>
        <AiOutlineSearch size={20} />
      </button>
    </form>
  )
}

OMDbSearch.propTypes = {
  setSearchQuery: PropTypes.func
}

export default OMDbSearch