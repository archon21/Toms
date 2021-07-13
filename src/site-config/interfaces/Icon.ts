import { Colors } from "../types";

interface Icon {
  size?: "verySmall" | "small" | "normal" | "large" | "veryLarge";
  provider?: "material-icons";
  name: string;
  color?: Colors;
}

export default Icon;
