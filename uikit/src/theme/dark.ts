import { DefaultTheme } from "styled-components";
import { dark as darkToggle } from "../components/Toggle/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  toggle: darkToggle,
  colors: darkColors
};

export default darkTheme;
