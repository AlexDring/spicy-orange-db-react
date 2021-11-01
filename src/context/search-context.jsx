import { createContext, useState } from 'react'
import { useSearch } from 'utils/search'

const SearchContext = createContext()

function SearchProvider(props) {
  const [searchQuery, setSearchQuery] = useState()
  const searchResults = useSearch(searchQuery)

  const searchInput = query => {
    const url = /^(http|https):/.test(query)
    let imdbKey = query.match(/tt?\d+/)
    console.log(imdbKey)
    if(url && !imdbKey) {
      setSearchQuery('i=XXXXX')
    } else if (url && imdbKey) {
      setSearchQuery(`i=${imdbKey}`)
    } else {
      setSearchQuery(`s=${query.trim()}`)
    }
  }

  return <SearchContext.Provider value={{searchResults, searchInput, searchQuery}} {...props} />
  
}

export { SearchContext, SearchProvider }