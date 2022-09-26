import { useMemo } from 'react'
import config, { ConfigMenuItemsType } from '../config/config'

export const useMenuItems = (): ConfigMenuItemsType[] => {
  
  const menuItems = useMemo(() => {
    return config()
  }, [])

  return useMemo(() => {
    return menuItems
  }, [menuItems])
}
