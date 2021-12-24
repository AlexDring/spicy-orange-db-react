import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
)

ProtectedRoute.propTypes = {
  component: PropTypes.func,
}

export default ProtectedRoute