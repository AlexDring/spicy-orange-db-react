import rottenIcons from 'assets/images/rotten-gas/rottenIcons'

const getConfig = (token) => {
  return {
    headers: { Authorization: `bearer ${token}` }
  }
}

const rottenReviewImage = (rottenAverage) => (
  rottenAverage > 849 ? rottenIcons.certifiedSmall : 
    rottenAverage > 599 ? rottenIcons.freshSmall :
      rottenAverage < 599 ? rottenIcons.rottenSmall :
        !rottenAverage ? rottenIcons.noReviewSmall : 
          null
)

export {
  getConfig,
  rottenReviewImage
}