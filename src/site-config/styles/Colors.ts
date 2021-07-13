import theme from "styled-theming";

const Colors = {
  primary: "red",
  textPrimary: "forestgreen",
  secondary: "black",
  textSecondary: "goldenrod",
  tertiary: "gray",
  quaternary: "yellow",
  danger: "red",
  safe: "forestgreen",
  background: "#fff",
  navBackground: "#328332",
  disabled: "#eee",
  boxShadow: "rgb(153, 153, 153, .3)",
  buttonPrimary: "black",
  buttonSecondary: "black",
};

Object.entries(Colors).forEach(([colorKey, colorTone]) => {
  Colors[colorKey] = theme("mode", { light: colorTone });
});

export default Colors;
