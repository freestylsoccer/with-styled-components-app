import { ToggleTheme } from '../components/Toggle/theme'
import { CardTheme } from '../components/Card/types'
import { NavThemeType } from '../widgets/Menu/theme'
import { ModalTheme } from '../widgets/Modal/types'
import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types'

export interface PancakeTheme {
  siteWidth: number
  isDark: boolean
  colors: Colors
  card: CardTheme
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  nav: NavThemeType
  modal: ModalTheme
  toggle: ToggleTheme
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  zIndices: ZIndices
}

export { darkColors, lightColors } from './colors'
export { default as dark } from './dark'
export { default as light } from './light'
export * from './types'
