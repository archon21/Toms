import React from 'react';
import styled from 'styled-components';

import { Colors, colors } from '../site-config';
import { getFlexAlignment } from '../util';

interface Props {
  column?: boolean;
  background?: Colors;
  noWrap?: boolean;
  yAlign?: string;
  xAlign?: string;
  alignment?: Array<string>;
}

const Vessel = styled.section<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  min-height: 100vh;
  width: 100vw;
  background: ${(props) =>
    props.background ? colors[props.background] : colors.background};
  ${(props) => props.alignment?.map((str) => str)}
`;

const WindoW: React.FC<Props> = (props) => {
  const alignment = getFlexAlignment({
    column: props.column,
    yAlign: props.yAlign,
    xAlign: props.xAlign,
  });
  return <Vessel {...props} alignment={alignment}></Vessel>;
};

export default WindoW;
