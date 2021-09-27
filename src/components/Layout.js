import Footer from './Footer'
import Nav from './Nav'
import PropTypes from 'prop-types'

const Layout = ({ profileId, children, setSearchQuery }) => {
  return(
    <>
      <Nav profileId={profileId} setSearchQuery={setSearchQuery} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  profileId: PropTypes.string,
  setSearchQuery: PropTypes.func
  // Defining types for component props improves reusability of your components by validating received data. It can warn other developers if they make a mistake while reusing the component with improper data type.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md#rule-options
}

export default Layout