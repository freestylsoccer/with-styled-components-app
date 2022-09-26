import { DefaultTheme } from "styled-components";
import { light as lightCard } from "../components/Card/theme";
import { light as lightNav } from "../widgets/Menu/theme";
import { light as lightModal } from "../widgets/Modal/theme";
import { light as lightToggle } from "../components/Toggle/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  card: lightCard,
  nav: lightNav,
  modal: lightModal,
  toggle: lightToggle,
};

export default lightTheme;
