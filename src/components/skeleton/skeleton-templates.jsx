import ContentLoader from 'react-content-loader'

const RecommendationSkeleton = (props) => (
  <ContentLoader 
    style={{background: 'white', width: '100%', height: '100%'}}
    speed={2}
    width={470}
    height={327.05}
    viewBox="0 0 470 325.5"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="360" y="235" rx="3" ry="3" width="88" height="6" /> 
    <rect x="376" y="255" rx="3" ry="3" width="52" height="6" /> 
    <rect x="240" y="55" rx="3" ry="3" width="211" height="6" /> 
    <rect x="240" y="75" rx="3" ry="3" width="190" height="6" /> 
    <rect x="240" y="35" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="284" cy="252" r="44" /> 
    <rect x="136" y="227" rx="0" ry="0" width="1" height="0" /> 
    <rect x="20" y="166" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="0" rx="0" ry="0" width="209" height="325.5" />
  </ContentLoader>
)

const SmallRecommendationSkeleton = (props) => (
  <ContentLoader 
    style={{background: 'white', width: '100%', height: '100%'}}
    speed={2}
    width={231.25}
    height={390}
    viewBox="0 0 231.25 390"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="63" y="352" rx="3" ry="3" width="146" height="6" /> 
    <circle cx="29" cy="363" r="20" /> 
    <rect x="0" y="-2" rx="0" ry="0" width="231" height="333" /> 
    <rect x="63" y="367" rx="3" ry="3" width="93" height="6" />
  </ContentLoader>
)

const RecommendationDetailSkeleton = (props) => (
  <ContentLoader 
    style={{background: 'white', width: '100%', height: '100%'}}
    speed={2}
    width={970}
    height={469.2}
    viewBox="0 0 970 469.2"
    backgroundColor="#f7f7f7"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="469.2" /> 
    <rect x="580" y="30" rx="3" ry="3" width="110" height="6" /> 
    <rect x="545" y="50" rx="3" ry="3" width="178" height="12" /> 
    <rect x="525" y="75" rx="3" ry="3" width="211" height="6" /> 
    <rect x="540" y="95" rx="3" ry="3" width="190" height="6" /> 
    <rect x="680" y="150" rx="99" ry="99" width="85" height="140" /> 
    {/* <circle cx="723" cy="230" r="80" />  */}
    <rect x="678" y="325" rx="3" ry="3" width="88" height="6" /> 
    <rect x="694" y="340" rx="3" ry="3" width="52" height="6" /> 
    <rect x="495" y="150" rx="99" ry="99" width="85" height="140" /> 
    {/* <circle cx="542" cy="230" r="80" />  */}
    <rect x="497" y="325" rx="3" ry="3" width="88" height="6" /> 
    <rect x="513" y="340" rx="3" ry="3" width="52" height="6" /> 
    <rect x="442" y="420.2" rx="0" ry="0" width="40" height="20" /> 
    <rect x="497" y="428.2" rx="3" ry="3" width="52" height="6" />
    <rect x="570" y="420.2" rx="0" ry="0" width="40" height="20" /> 
    <rect x="625" y="428.2" rx="3" ry="3" width="52" height="6" />
    <rect x="697" y="420.2" rx="0" ry="0" width="40" height="20" /> 
    <rect x="752" y="428.2" rx="3" ry="3" width="52" height="6" />
  </ContentLoader>
)

const RecommendationInfoSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={750}
    height={200}
    viewBox="0 0 750 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="410" height="24" /> 
    <rect x="0" y="50" rx="3" ry="3" width="750" height="6" /> 
    <rect x="0" y="82" rx="3" ry="3" width="650" height="6" /> 
    <rect x="0" y="98" rx="3" ry="3" width="550" height="6" /> 
    <rect x="0" y="66" rx="3" ry="3" width="750" height="6" />
  </ContentLoader>
)

const SearchResultSkeleton = (props) => (
  <ContentLoader 
    style={{backgroundColor: '#fff8ed'}}
    speed={2}
    width={550}
    height={490}
    viewBox="0 0 490 490"
    backgroundColor="#f9e8cd"
    foregroundColor="#f9f3eb"
    {...props}
  >
    <rect x="180" y="-110" rx="3" ry="3" width="130" height="180" /> 
    <rect x="105" y="100" rx="3" ry="3" width="280" height="12" /> 
    <rect x="147.5" y="126" rx="3" ry="3" width="195" height="6" /> 
    <rect x="0" y="170" rx="3" ry="3" width="502" height="6" /> 
    <rect x="0" y="186" rx="3" ry="3" width="502" height="6" /> 
    <rect x="0" y="202" rx="3" ry="3" width="440" height="6" /> 
  </ContentLoader>
)

const ReviewSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={473}
    height={148.47}
    viewBox="0 0 473 148.47"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="70" height="105" /> 
    <circle cx="96" cy="18" r="13" /> 
    <rect x="122" y="15" rx="3" ry="3" width="45" height="6" /> 
    <circle cx="195" cy="18" r="13" /> 
    <rect x="218" y="15" rx="3" ry="3" width="45" height="6" />
    <rect x="80" y="40" rx="3" ry="3" width="180" height="20" /> 
    <rect x="2" y="119" rx="3" ry="3" width="410" height="6" /> 
    <rect x="2" y="135" rx="3" ry="3" width="380" height="6" /> 
  </ContentLoader>
)

export {
  RecommendationSkeleton,
  RecommendationInfoSkeleton,
  SmallRecommendationSkeleton,
  RecommendationDetailSkeleton,
  SearchResultSkeleton,
  ReviewSkeleton
}