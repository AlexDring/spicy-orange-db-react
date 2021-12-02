import { useWatchlist } from 'utils/profile'
import Section from 'components/layout/section'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import { FaRegBookmark} from 'react-icons/fa'
import EmptyPlaceholder from 'components/empty-placeholder'
import ItemCount from 'components/item-count'

const Watchlist = () => {
  const { watchlist, isLoading, isFetching } = useWatchlist()
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
          loading={isLoading}
          recommendations={watchlist}
          skeletonCount={8}
        />
      }
    </Section>
  )
}


export default Watchlist