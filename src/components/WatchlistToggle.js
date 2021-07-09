import styled from 'styled-components'

const WatchlistToggleStyles = styled.div`
  display: flex;
  margin-bottom: 6px;
  span {
    cursor: pointer;
    display: flex; 
    align-items: center; 
    margin-right: 12px
  }
  svg {
    margin-right: 6px;
  }
`

const WatchlistToggle = () => {
  const Toggle = () => {
    console.log('togglewatch')
  }

  return(
    <WatchlistToggleStyles>
      <span onClick={() => Toggle()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  height="15px">
          <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"/></svg> Add to Watchlist
      </span>
      <span onClick={() => Toggle()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="15px"><path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/></svg> Seen?
      </span>
    </WatchlistToggleStyles>
  )
}

export default WatchlistToggle