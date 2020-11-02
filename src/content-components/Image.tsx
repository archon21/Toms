import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  objectFit?: 'cover' | 'contain';
}

const Img = styled.img<Props>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  object-fit: ${(props) => props.objectFit || 'contain'};
`;

const Image: React.FC<Props> = (props) => {
  return <Img {...props}></Img>;
};

export default Image;
