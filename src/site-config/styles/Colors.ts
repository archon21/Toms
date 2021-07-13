import theme from "styled-theming";

const Colors = {
  primary: theme("mode", {
    light: "red",
    dark: "forestgreen",
  }),
  textPrimary: theme("mode", {
    light: "forestgreen",
    dark: "forestgreen",
  }),
  secondary: theme("mode", {
    light: "black",
    dark: "goldenrod",
  }),
  textSecondary: theme("mode", {
    light: "goldenrod",
    dark: "forestgreen",
  }),
  tertiary: theme("mode", {
    light: "gray",
    dark: "#000",
  }),
  quaternary: theme("mode", {
    light: "yellow",
    dark: "#000",
  }),
  danger: theme("mode", {
    light: "red",
    dark: "#000",
  }),
  safe: theme("mode", {
    light: "forestgreen",
    dark: "#000",
  }),
  background: theme("mode", {
    light: "#fff",
    dark: "#000",
  }),
  navBackground: theme("mode", {
    light: "#328332",
    dark: "#000",
  }),
  disabled: theme("mode", {
    light: "#eee",
    dark: "#eee",
  }),
  boxShadow: theme("mode", {
    light: "rgb(153, 153, 153, .3)",
    dark: "#eee",
  }),
  buttonPrimary: theme("mode", {
    light: "black",
    dark: "#eee",
  }),
  buttonSecondary: theme("mode", {
    light: "black",
    dark: "black",
  }),
};

export default Colors;
