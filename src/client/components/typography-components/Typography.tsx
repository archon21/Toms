import React from "react";
import styled from "styled-components";

import { Styles, Interfaces, Types } from "../../../site-config";

const Element = (props) => React.createElement(props.variant || "span", props);

const Typography: React.FC<Interfaces.Typography.Typography> = (props) => {
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
      ? Styles.FontFamily[props.fontFamily]
      : Styles.FontFamily.primary};
  `;

  return <StyledElement {...props}></StyledElement>;
};
export default Typography;
