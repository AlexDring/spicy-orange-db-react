import { createContext, useState } from 'react'
import { useSearch } from 'utils/search'

const SearchContext = createContext()

function SearchProvider(props) {
  const [searchQuery, setSearchQuery] = useState()

  const searchInput = query => setSearchQuery(query)

  const searchResults = useSearch(searchQuery)

  return <SearchContext.Provider value={{searchResults, searchInput, searchQuery}} {...props} />
  
}

export { SearchContext, SearchProvider }