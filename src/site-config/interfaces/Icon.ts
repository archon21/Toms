import { Colors } from "../types";

interface Icon {
  size?: "verySmall" | "small" | "normal" | "large" | "veryLarge";
  provider?: "material-icons";
  name: string;
  color?: Colors;
  type: "svg" | "icon";
}

export default Icon;
 