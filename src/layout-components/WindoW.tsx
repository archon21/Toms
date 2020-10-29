import React from 'react';
import styled from 'styled-components';

import { Colors, colors } from '../site-config';

interface Props {
  column?: boolean;
  background?: Colors;
  noWrap?: boolean;
}

const Vessel = styled.section<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  min-height: 100vh;
  background: ${(props) =>
    props.background ? colors[props.background] : colors.background};
`;

const WindoW: React.FC<Props> = (props) => {
  return <Vessel {...props}></Vessel>;
};

export default WindoW;
