import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Styles, Interfaces, Types } from "../../../../site-config";
import { Typography } from "../../typography-components";

interface Props {
  to: string;
  typographyConfig: Interfaces.Typography.Typography;
  externalConfig: {
    isNewTab?: boolean;
  };
  children: React.ReactNode;
  style?: object;
  margin?: string;
  padding?: string;
}

const a = styled.a``;

const L: React.FC<Props> = (props) => {
  const Element: any = Boolean(props.externalConfig) ? a : Link;

  const StyledElement: any = styled(Element).attrs({
    href: props.to,
    target: props.externalConfig?.isNewTab ? "_blank" : "",
    to: props.to,
  })`
    transition: all 300ms;
    text-decoration: none;
    ${(props) =>
      Styles.Defaults.Colors({
        props,
      })}

    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <StyledElement {...props} color={"background"}>
      <Typography {...props.typographyConfig}>{props.children}</Typography>
    </StyledElement>
  );
};

export default L;
