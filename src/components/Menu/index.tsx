import { useMemo } from 'react'
import { useRouter } from 'next/router'
import useLanguage from '../../hooks/useLanguage'
import { languageList } from '../../localization'
import { NextLinkFromReactRouter } from '..//NextLink'
import { Menu as UikitMenu } from '../../../uikit/src'
import useTheme from '../../hooks/useTheme'

import UserMenu from './UserMenu'
import { useMenuItems } from './hooks/useMenuItems'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'
import { SettingsMode } from './GlobalSettings/types'

const Menu = (props) => {
  const { isDark, setTheme } = useTheme()
  const { setLanguage } = useLanguage()
  const { pathname } = useRouter()
  const { locale } = useRouter()

  const menuItems = useMenuItems()

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks()
  }, [locale])

  return (
    <UikitMenu
      linkComponent={(linkProps) => {
        return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
      }}
      rightSide={
        <>
          <GlobalSettings mode={SettingsMode.GLOBAL} />
          <UserMenu />
        </>
      }
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={locale}
      langs={languageList}
      setLang={setLanguage}
      links={menuItems}
      subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      footerLinks={getFooterLinks}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      {...props}
    />
  )
}

export default Menu
