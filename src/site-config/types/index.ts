import { Styles } from "../../site-config";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "li";

export type Colors = keyof typeof Styles.Colors;

export type FontFamily = "primary" | "secondary";
