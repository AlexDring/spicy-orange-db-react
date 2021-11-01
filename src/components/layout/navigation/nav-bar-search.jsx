import { SearchContext } from 'context/search-context'
import { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useHistory } from 'react-router'

const OMDbSearch = () => {
  const history = useHistory()
  const { searchInput } = useContext(SearchContext)
  
  const searchQuery = async (e) => {
    e.preventDefault()
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


export default OMDbSearch