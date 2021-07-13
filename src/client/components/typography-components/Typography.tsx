import React from "react";
import styled from "styled-components";

import { Styles, fontFamily, Interfaces, Types } from "../../../site-config";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "li";
  children: any;
  style?: object;
  margin?: string;
  padding?: string;
  color: Types.Colors;
  textAlign?: "left" | "center" | "right";
  weight?: "bold" | "semi" | "normal";
  fontFamily?: Interfaces.FontFamily;
  displayAlign?: Interfaces.DisplayAlign;
}

const Element = (props) => React.createElement(props.variant || "span", props);

const Typography: React.FC<Props> = (props) => {
  const StyledElement = styled(Element).attrs({})`
    color: ${(props) =>
      props.color ? Styles.Colors[props.color] : Styles.Colors.textPrimary};
    ${Styles.Defaults.Spacing({ props })}
    ${Styles.Defaults.DisplayAlign({ props })}
    font-size: ${(props) =>
      props.variant ? Styles.FontSizes[props.variant] : Styles.FontSizes.p};
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    transition: all 300ms;
    font-family: ${props.fontFamily
      ? fontFamily[props.fontFamily]
      : fontFamily.primary};
  `;

  return <StyledElement {...props}></StyledElement>;
};
export default Typography;
