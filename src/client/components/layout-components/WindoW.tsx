import React from 'react';
import styled from 'styled-components';

import { Interfaces,  Styles, siteConfig, Types } from '../../../site-config';
import { getFlexAlignment } from '../../util/functions';

interface Props {
  column?: boolean;
  background?: Types.Colors;
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
      ? `calc(100vh - ${siteConfig.client.nav.style.navHeight})`
      : '100vh'};
  width: 100vw;
  background: ${(props) =>
    props.background ?  Styles.Colors[props.background] :  Styles.Colors.backgroundPrimary};
  ${(props) => props.alignment?.map((str) => str)}
  align-items: center;
`;

const Vessel = styled.section<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};

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
    <Outer {...props} alignment={alignment}>
      <Vessel {...props} alignment={alignment}></Vessel>
    </Outer>
  );
};

export default WindoW;
