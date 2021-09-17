import { useEffect } from 'react'
// import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
import MediaCard from '../components/MediaCard'
import { fetchWatchlist } from '../reducers/profileSlice'
import { MediaCardGridStyles, SectionStyles } from '../styles/styles'

const Watchlist = () => {
  const dispatch = useDispatch()
  // let { slug } = useParams()
  const profile = useSelector(state => state.profile)
  console.log(typeof(profile))
  useEffect(() => {
    if(profile.data) {
      dispatch(fetchWatchlist(profile.data._id))
    }
  }, [profile.data ? profile.data._id : null, dispatch])

  // const result = useQuery({
  //   queryKey: ['watchlist', {profile.data.id}],
  //   queryFn: () => profileRouter.getWatchlist(profile.data.id).then(data => data)
  // })

  // if(!watchlist) {
  //   return null                 
  // }

  console.log(profile)

  return(
    <SectionStyles>
      <section>
        <h1>Your Watchlist</h1>
        <MediaCardGridStyles>
          {profile.data ? profile.data.watchlist.map(p =>
            <MediaCard 
              key={p._id} 
              singleMedia={p.media_id} />) : null}
        </MediaCardGridStyles>
      </section>
    </SectionStyles>
  )
}

export default Watchlist