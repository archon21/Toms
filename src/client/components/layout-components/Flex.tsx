import React from 'react';
import styled from 'styled-components';

import { Interfaces, colors } from '../../../site-config';
import { getFlexAlignment } from '../../util/functions';

interface Props {
  column?: boolean;
  background?: Interfaces.Colors;
  noWrap?: boolean;
  yAlign?: string;
  xAlign?: string;
  alignment?: Array<string>;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  className?: string;
  id?: string;
}

const Vessel = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  ${(props) => props.alignment?.map((str) => str)}
`;

const Flex: React.FC<Props> = (props) => {
  const alignment = getFlexAlignment({
    column: props.column,
    yAlign: props.yAlign,
    xAlign: props.xAlign,
  });
  return <Vessel {...props} alignment={alignment}></Vessel>;
};

export default Flex;
