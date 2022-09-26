import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '../../../uikit/src'
import { Trans } from '@lingui/macro'
import { useRouter } from 'next/router'
import Link from 'next/link'

const StyledNav = styled.nav`
  margin-bottom: 40px;
`

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const { pathname } = useRouter()

  return (
    <StyledNav>
      <ButtonMenu activeIndex={getActiveIndex(pathname)} scale="sm" variant="subtle">
        <Link href="/swap" passHref>
          <ButtonMenuItem id="swap-nav-link" as="a">
            <Trans>Swap</Trans>
          </ButtonMenuItem>
        </Link>
        <Link href="/pool" passHref>
          <ButtonMenuItem id="pool-nav-link" as="a">
            <Trans>Liquidity</Trans>
          </ButtonMenuItem>
        </Link>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
