import { Interfaces, Types } from "../..";
import { FontFamily } from "../../types";

interface Typography {
  variant: Types.TypographyVariant;
  children?: any;

  fontFamily?: FontFamily;
  weight?: "bold" | "semi" | "normal";
  textAlign?: "left" | "center" | "right";
  color?: Types.Colors;
  style?: object;
  margin?: string;
  padding?: string;
  displayAlign?: Interfaces.DisplayAlign;
  textBorder?: { size: string; color: Types.Colors };
}

export default Typography;
