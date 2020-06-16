import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './Layout'
import DefaultErrorBoundry from './DefaultErrorBoundry'

if (process.env.Node_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <Layout />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById('app')
)
