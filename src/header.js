/** @jsx jsx */
import {
  HeaderWrapper,
  WebsiteNavigation,
  WebsiteNavigationItem
} from './header.styles'
import { colors } from './styles/vars'
import { css, jsx } from '@emotion/core'
import { hide } from './styles/utils'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <Link to="/">
          <svg viewBox="0 0 40 40" width="40" height="40">
            <g>
              <rect width="40" height="40" fill={colors.primary.blue} />
            </g>
          </svg>
        </Link>
      </div>
      <h1
        aria-hidden
        css={css`
          ${hide}
        `}
      >
        website name
      </h1>
      <WebsiteNavigation>
        <WebsiteNavigationItem to="/">Home</WebsiteNavigationItem>

        <WebsiteNavigationItem to="/">About</WebsiteNavigationItem>
        <WebsiteNavigationItem to="/">Contact</WebsiteNavigationItem>
      </WebsiteNavigation>
    </HeaderWrapper>
  )
}

export default Header
