import {
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  Box,
} from '../../../../uikit/src'
import { i18n } from "@lingui/core"
import { t } from "@lingui/macro"

const UserMenu = () => {
  const UserMenuItems = () => {
    return (
      <>
        <UserMenuItem as="button" disabled={false}>
        {i18n._(t`Recent Transactions`)}
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
        {i18n._(t`Login`)}
      </Box>
      <Box display={['block', , , 'none']}>
        {i18n._(t`Login`)}
      </Box>
    </div>
  )
}

export default UserMenu
