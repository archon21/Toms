import { Interfaces, Types } from "../..";

interface Typography {
  variant: Types.TypographyVariant;
  children?: any;

  fontFamily?: Types.FontFamily;
  weight?: "bold" | "semi" | "normal";
  textAlign?: "left" | "center" | "right";
  color?: Types.Colors;
  style?: object;
  margin?: string;
  padding?: string;
  displayAlign?: Interfaces.DisplayAlign;
}

export default Typography;
