import { useWatchlist } from 'utils/profile'
import Section from 'components/layout/section'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import { FaRegBookmark} from 'react-icons/fa'
import EmptyPlaceholder from 'components/empty-placeholder'
import ItemCount from 'components/item-count'
import { useProfile } from 'utils/profile'

const Watchlist = () => {
  const { watchlist, isLoading, isFetching } = useWatchlist()
  const { profile } = useProfile()
  const totalItems = watchlist?.length

  return(
    <Section>
      <h1>Your Watchlist <ItemCount isLoading={isFetching} count={watchlist?.length + ' items'} fontSize={'18px'} /></h1>

      {totalItems === 0 ? 
        <EmptyPlaceholder
          icon={<FaRegBookmark size={80} />}
          text={<p>Your watchlist is empty.</p>} 
        /> : 
        <RecommendationsGrid
          loading={isLoading || isFetching}
          recommendations={watchlist}
          skeletonCount={profile?.watchlist}
        />
      }
    </Section>
  )
}


export default Watchlist