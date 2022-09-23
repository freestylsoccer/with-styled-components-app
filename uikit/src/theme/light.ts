import { DefaultTheme } from "styled-components";
import { light as lightToggle } from "../components/Toggle/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  toggle: lightToggle,
  colors: lightColors,
};

export default lightTheme;
