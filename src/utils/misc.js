import rottenIcons from 'assets/images/rotten-gas/rottenIcons'

const rottenReviewImage = (rottenAverage) => {
  return (
    rottenAverage > 849 ? rottenIcons.certifiedSmall : 
      rottenAverage > 599 ? rottenIcons.freshSmall :
        rottenAverage < 599 ? rottenIcons.rottenSmall : 
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

export {
  rottenReviewImage,
  borderColor
}