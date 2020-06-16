import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout'
import DefaultErrorBoundry from './DefaultErrorBoundry'

if (process.env.Node_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <Router>
        <Layout />
      </Router>
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById('app')
)
