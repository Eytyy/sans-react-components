/** @jsx jsx */
import { hot } from 'react-hot-loader'
import GlobalStyles from './styles/global'
import App from './App'
import Header from './header'
import Footer from './footer'
import { css, jsx } from '@emotion/core'
import { Fragment } from 'react'

const Layout = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <main
        css={css`
          min-height: 80vh;
        `}
      >
        <App />
      </main>
      <Footer />
    </Fragment>
  )
}

export default hot(module)(Layout)
