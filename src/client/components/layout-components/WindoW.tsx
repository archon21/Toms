import React from "react";
import styled from "styled-components";

import { Interfaces, Styles, siteConfig, Types } from "../../../site-config";
import { getFlexAlignment } from "../../util/functions";

interface Props {
  column?: boolean;
  background?: Types.Colors;
  backgroundUrl?: {
    url: string;
  };
  fullWidth?: boolean;
  noWrap?: boolean;
  yAlign?: string;
  xAlign?: string;
  alignment?: Array<string>;
  init?: boolean;
  margin?: string;
}

const Outer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: ${(props) =>
    props.init
      ? `calc(100vh - ${siteConfig.client.nav.style.navHeight})`
      : "100vh"};
  width: 100vw;

  background: ${(props) => {
    if (props.backgroundUrl) {
      return `url(${props.backgroundUrl.url})`;
    } else
      return props.background
        ? Styles.Colors[props.background]
        : Styles.Colors.backgroundPrimary;
  }};
  background-repeat: none;
  background-size: cover;
  ${(props) => props.alignment?.map((str) => str)}
  align-items: center;
  ${(props) => Styles.Defaults.Spacing({ props })}
`;

const Vessel = styled.section<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => (props.noWrap ? "nowrap" : "wrap")};

  max-width: 100%;
  width: ${(props) => (props.fullWidth ? "100%" : "90%")};
  ${(props) => props.alignment?.map((str) => str)}
`;

const WindoW: React.FC<Props> = (props) => {
  const alignment = getFlexAlignment({
    column: props.column,
    yAlign: props.yAlign,
    xAlign: props.xAlign,
  });


  return (
    <Outer {...props} alignment={alignment}>
      <Vessel {...props} alignment={alignment}></Vessel>
    </Outer>
  );
};

export default WindoW;
