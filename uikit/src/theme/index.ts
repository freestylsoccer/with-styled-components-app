import { ToggleTheme } from "../components/Toggle/theme";
import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from "./types";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  toggle: ToggleTheme;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";
export * from "./types";
