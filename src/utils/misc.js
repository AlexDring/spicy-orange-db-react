import rottenIcons from 'assets/images/rotten-gas/rottenIcons'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const rottenReviewImage = (rottenAverage) => {
  return (
    rottenAverage > 849 ? rottenIcons.certified140 : 
      rottenAverage > 599 ? rottenIcons.fresh140 :
        rottenAverage > 0 ? rottenIcons.stinker140 : 
          rottenIcons.noReviewSmall 
  )
}

function borderColor(recommendationType) {
  return(
    recommendationType === 'movie' ? '3px solid #FFB17A' : 
      recommendationType === 'series' ? '3px solid #FCE762' : 
        '3px solid #c7f06f'
  )
}

function convertDate(date) {
  const dateToConvert = new Date(date)
  return (new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }).format(dateToConvert)) 
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


export {
  rottenReviewImage,
  borderColor,
  convertDate,
  ScrollToTop
}