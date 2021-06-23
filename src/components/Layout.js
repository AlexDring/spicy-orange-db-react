import Footer from './Footer'
import Nav from './Nav'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return(
    <div>
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
  // Defining types for component props improves reusability of your components by validating received data. It can warn other developers if they make a mistake while reusing the component with improper data type.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md#rule-options
}

export default Layout