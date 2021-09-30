import axios from 'axios'
import { useQuery } from 'react-query'
const baseUrl = '/api/omdb'

function useSearch (query){
  const result = useQuery({
    queryKey: ['mediaSearch', {query}],
    queryFn: () => axios.get(`${baseUrl}/${query}`).then(search => search.data),
    enabled: !!query
  })
  console.log({...result, search: result.data})
  return {...result, search: result.data}
}

export {
  useSearch
}