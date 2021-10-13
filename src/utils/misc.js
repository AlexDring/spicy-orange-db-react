import rottenIcons from 'assets/images/rotten-gas/rottenIcons'

const getConfig = (token) => {
  return {
    headers: { Authorization: `bearer ${token}` }
  }
}

const rottenReviewImage = (rottenAverage) => (
  rottenAverage > 849 ? rottenIcons.certifiedGa : 
    rottenAverage > 599 ? rottenIcons.freshGa :
      rottenAverage < 599 ? rottenIcons.rottenGa :
        rottenIcons.noReview
)
export {
  getConfig,
  rottenReviewImage
}