import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Styles, Interfaces, Types } from "../../../../site-config";
import { Typography } from "../../typography-components";

interface Props {
  to: string;
  typographyConfig: Interfaces.Typography.Typography;
  transitionConfig?: {
    underline: boolean;
    color?: {
      color: Types.Colors;
    };
  };
  externalConfig: {
    isNewTab?: boolean;
  } | null;
  children: React.ReactNode;
  style?: object;
  margin?: string;
  padding?: string;
}

const Element = (props) =>
  props.externalConfig ? <a {...props}></a> : <Link {...props} />;

const StyledElement: any = styled(Element).attrs((props) => ({
  href: props.to,
  target: props.externalConfig?.isNewTab ? "_blank" : "",
  to: props.to,
}))`
  transition: all 300ms;
  text-decoration: none;
  margin: ${(props) => props.margin || ""};
  border-bottom: 0.1em solid transparent;
  color: ${(props) => Styles.Colors[props.typographyConfig?.color]};

  ${(props) =>
    props.transitionConfig &&
    `
      &:hover {
        color: ${
          props.transitionConfig?.color
            ? Styles.Colors[props.transitionConfig?.color?.color] || ""
            : "none"
        };
        border-bottom: ${
          props.transitionConfig?.underline ? "0.1em solid" : ""
        };
       
      }
      `}
`;

const L: React.FC<Props> = (props) => {
  return (
    <StyledElement {...props} color={"background"}>
      <Typography {...props.typographyConfig}>{props.children}</Typography>
    </StyledElement>
  );
};

export default L;
