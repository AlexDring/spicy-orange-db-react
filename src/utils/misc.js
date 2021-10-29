import rottenIcons from 'assets/images/rotten-gas/rottenIcons'

const rottenReviewImage = (rottenAverage) => (
  rottenAverage > 849 ? rottenIcons.certifiedSmall : 
    rottenAverage > 599 ? rottenIcons.freshSmall :
      rottenAverage < 599 ? rottenIcons.rottenSmall :
        !rottenAverage ? rottenIcons.noReviewSmall : 
          null
)

export {
  rottenReviewImage
}