import { createContext, useState } from 'react'

const SearchContext = createContext()

function SearchProvider(props) {
  const [searchQuery, setSearchQuery] = useState()

  const searchInput = query => setSearchQuery(query)

  return <SearchContext.Provider value={{searchInput, searchQuery}} {...props} />
  
}

export { SearchContext, SearchProvider }