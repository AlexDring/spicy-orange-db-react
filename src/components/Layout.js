import Footer from './Footer'
import Nav from './Nav'
import PropTypes from 'prop-types'

const Layout = ({ profileId, children }) => {
  return(
    <>
      <Nav profileId={profileId} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  profileId: PropTypes.string,
  // Defining types for component props improves reusability of your components by validating received data. It can warn other developers if they make a mistake while reusing the component with improper data type.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md#rule-options
}

export default Layout