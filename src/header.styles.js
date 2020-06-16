import styled from '@emotion/styled'
import { wrap } from './styles/utils'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  ${wrap}
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WebsiteNavigation = styled.nav`
  display: flex;
`

export const WebsiteNavigationItem = styled(Link)`
  margin-left: 40px;
`
