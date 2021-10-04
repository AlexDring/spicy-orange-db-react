import ContentLoader from 'react-content-loader'

const PosterSkeleton = (props) => (
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

const CardSkeleton = (props) => (
  <ContentLoader 
    style={{background: 'white', width: '100%', height: '100%'}}
    speed={2}
    width={470}
    height={319.0}
    viewBox="0 0 470 319.0"
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
    <rect x="0" y="0" rx="0" ry="0" width="209" height="319.05" />
  </ContentLoader>
)

export {
  PosterSkeleton,
  CardSkeleton
}

