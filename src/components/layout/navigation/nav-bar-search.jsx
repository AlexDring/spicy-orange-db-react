import { SearchContext } from 'context/search-context'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useHistory } from 'react-router'
import { useSearch } from 'utils/search'

const OMDbSearch = () => {
  const history = useHistory()
  // const [query, setQuery] = useState('')
  // const [queried, setQueried] = useState(false)
  const { searchInput } = useContext(SearchContext)
  // console.log(context)
  // const result = useSearch(query)
  
  const searchQuery = async (e) => {
    e.preventDefault()
    // setQuery(`s=${e.target.elements.search.value}`)
    // setQueried(true)
    console.log(e.target.elements.search.value)
    searchInput(e.target.elements.search.value)
    history.push('/search')
  }
  
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