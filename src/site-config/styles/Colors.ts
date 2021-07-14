import theme from "styled-theming";

const DARK = "#3B7A57";
const LIGHT = "#ffe55a";
const WHITE = "#fff";

const Colors = {
  primary: DARK,
  secondary: LIGHT,
  textPrimary: LIGHT,
  textSecondary: DARK,
  tertiary: "gray",
  quaternary: "yellow",
  danger: "red",
  safe: "forestgreen",
  backgroundPrimary: DARK,
  backgroundSecondary: WHITE,
  navBackground: DARK,
  disabled: "#eee",
  boxShadow: "rgb(153, 153, 153, .3)",
  buttonPrimary: DARK,
  buttonSecondary: LIGHT,
};

Object.entries(Colors).forEach(([colorKey, colorTone]) => {
  Colors[colorKey] = theme("mode", { light: colorTone });
});

export default Colors;
