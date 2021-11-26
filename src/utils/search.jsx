import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'
const baseUrl = '/api/omdb'

function useSearch(query) {
  const result = useInfiniteQuery({
    queryKey: ['search', query], 
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(`${baseUrl}/${query}/page=${pageParam}`)
      const pagesNo = Math.ceil(response.data.totalResults/10)
      return {
        error: response.data.Error,
        results: response.data.Search ? response.data.Search : [response.data], // This displays result whether general search s= or imdb search i= query is used.
        totalResults: response.data.totalResults,
        totalPages: pagesNo,
        nextPage: pageParam + 1 === pagesNo ? undefined : pageParam + 1
      }
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    enabled: !!query
  })
  return {...result, search: result.data}
}

function useIndividualSearch(mediaId) {
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