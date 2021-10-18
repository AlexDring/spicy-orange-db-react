import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'
const baseUrl = '/api/omdb'

function useSearch (query, queried){
  const result = useInfiniteQuery({
    queryKey: ['mediaSearch', {query}],
    queryFn: () => 
      axios.get(`${baseUrl}/${query}/page=`)
        .then(search => search.data),
    enabled: !!queried
  })
  return {...result, search: result.data}
}

function useIndividualSearch (mediaId) {
  const result = useQuery({
    queryKey: ['individualMediaSearch', {mediaId}],
    queryFn: () => 
      axios.get(`${baseUrl}/i=${mediaId}`)
        .then(search => search.data),
    enabled: !!mediaId
  })
  return {...result, search: result.data}
}

export {
  useSearch,
  useIndividualSearch
}