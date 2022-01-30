import { useWatchlist } from 'utils/profile'
import Section from 'components/layout/section'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import { FaRegBookmark} from 'react-icons/fa'
import EmptyPlaceholder from 'components/empty-placeholder'
import ItemCount from 'components/item-count'

const Watchlist = () => {
  const { watchlist, isLoading } = useWatchlist()

  return(
    <Section>
      <h1>Your Watchlist <ItemCount loading={isLoading} count={watchlist?.length} fontSize={'18px'} background={'#FFB17A'} />
      </h1>
      {watchlist?.length === 0 ? 
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