import React from 'react';

import styled from 'styled-components';

interface Props {
  layout: Array<number>;
  centerMobile?: boolean;
  children: React.ReactNode;
  formattedLayout?: string;
  width?: string;
  margin?: string;
  padding?: string;
}

const Vessel = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.centerMobile ? 'repeat(auto-fill, 100%)' : props.formattedLayout};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

const Grid: React.FC<Props> = (props) => {
  const formattedLayout: string = props.layout.reduce(
    (acc, curr) => (acc += ` ${curr}%`),
    ''
  );
  return (
    <Vessel {...props} formattedLayout={formattedLayout}>
      {props.children}
    </Vessel>
  );
};

export default Grid;
