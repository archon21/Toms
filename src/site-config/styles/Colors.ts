import theme from "styled-theming";

const DARK = "#3B7A57";
const LIGHT = "#ffe55a";
const WHITE = "#fff";


const Colors = {
  primary: DARK,
  secondary: LIGHT,
  textPrimary: LIGHT,
  textSecondary: DARK,
  textTertiary: WHITE,
  tertiary: "gray",
  quaternary: "yellow",
  danger: "red",
  safe: "forestgreen",
  backgroundPrimary: DARK,
  backgroundSecondary: WHITE,
  navBackground: DARK,
  disabled: "#eee",
  boxShadow:  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  buttonPrimary: DARK,
  buttonSecondary: LIGHT,
};

Object.entries(Colors).forEach(([colorKey, colorTone]) => {
  Colors[colorKey] = theme("mode", { light: colorTone });
});

export default Colors;
