import { createContext, useState } from 'react'
import { useSearch } from 'utils/search'

const SearchContext = createContext()

function SearchProvider(props) {
  const [searchQuery, setSearchQuery] = useState()
  const searchResults = useSearch(searchQuery)

  const searchInput = query => setSearchQuery(query)

  return <SearchContext.Provider value={{searchResults, searchInput, searchQuery}} {...props} />
  
}

export { SearchContext, SearchProvider }