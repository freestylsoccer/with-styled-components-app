import {
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  Box,
} from '../../../../uikit/src'
import { Trans } from '@lingui/macro'

const UserMenu = () => {
  const UserMenuItems = () => {
    return (
      <>
        <UserMenuItem as="button" disabled={false}>
          <Trans>Recent Transactions</Trans>
        </UserMenuItem>
        <UserMenuDivider />
      </>
    )
  }

  if (true) {
    return (
      <UIKitUserMenu>
        {({ isOpen }) => (isOpen ? <UserMenuItems /> : null)}
      </UIKitUserMenu>
    )
  }

  return (
    <div>
      <Box display={['none', , , 'block']}>
        <Trans>Login</Trans>
      </Box>
      <Box display={['block', , , 'none']}>
        <Trans>Login</Trans>
      </Box>
    </div>
  )
}

export default UserMenu
