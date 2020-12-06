import React from 'react';
import styled from 'styled-components';

import { Interfaces, colors, siteConfig } from '../../../site-config';
import { getFlexAlignment } from '../../util/functions';

interface Props {
  column?: boolean;
  background?: Interfaces.Colors;
  fullWidth?: boolean;
  noWrap?: boolean;
  yAlign?: string;
  xAlign?: string;
  alignment?: Array<string>;
  init?: boolean;
}

const Outer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: ${(props) =>
    props.init
      ? `calc(100vh - ${siteConfig.nav.style.navHeight} - ${siteConfig.nav.style.footerHeight})`
      : '100vh'};
  width: 100vw;
  background: ${(props) =>
    props.background ? colors[props.background] : colors.background};
  ${(props) => props.alignment?.map((str) => str)}
  align-items: center;
`;

const Vessel = styled.section<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  min-height: ${(props) =>
    props.init
      ? `calc(100vh - ${siteConfig.nav.style.navHeight} - ${siteConfig.nav.style.footerHeight})`
      : '100vh'};
  max-width: ${(props) => (props.fullWidth ? '100%' : '2000px')};
  width: ${(props) => (props.fullWidth ? '100%' : '90%')};
  ${(props) => props.alignment?.map((str) => str)}
`;

const WindoW: React.FC<Props> = (props) => {
  const alignment = getFlexAlignment({
    column: props.column,
    yAlign: props.yAlign,
    xAlign: props.xAlign,
  });
  return (
    <Outer>
      <Vessel {...props} alignment={alignment}></Vessel>
    </Outer>
  );
};

export default WindoW;
