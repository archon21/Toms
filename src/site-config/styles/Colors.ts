import theme from "styled-theming";

const DARK = "#5E8F72";
const LIGHT = "goldenrod";
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
  navMobileBackground: "rgba(94, 143, 114, .9)",
  footerBackground: DARK,
  disabled: "#eee",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  buttonPrimary: DARK,
  buttonSecondary: LIGHT,
  transparent: "transparent",
};

Object.entries(Colors).forEach(([colorKey, colorTone]) => {
  Colors[colorKey] = theme("mode", { light: colorTone });
});

export default Colors;
