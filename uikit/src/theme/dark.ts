import { DefaultTheme } from "styled-components";
import { dark as darkCard } from "../components/Card/theme";
import { dark as darkNav } from "../widgets/Menu/theme";
import { dark as darkModal } from "../widgets/Modal/theme";
import { dark as darkToggle } from "../components/Toggle/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  card: darkCard,
  nav: darkNav,
  modal: darkModal,
  toggle: darkToggle,
  colors: darkColors
};

export default darkTheme;
