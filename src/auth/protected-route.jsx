/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { FullPageSpinner } from 'components/lib'

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
)

export default ProtectedRoute