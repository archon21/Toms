import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors, FontFamily } from '../site-config';
import { Typography } from '../typography-components';

interface Props {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  style?: object;
  margin?: string;
  padding?: string;
  color?: Colors;
  textAlign?: 'left' | 'center' | 'right';
  weight?: 'bold' | 'semi' | 'normal';
  fontFamily?: FontFamily;
  external?: boolean;
  to: string;
  openInNewTab?: boolean;
}

const a = styled.a``;

const L: React.FC<Props> = (props) => {
  const Element: any = props.external ? a : Link;

  const StyledElement: any = styled(Element).attrs({
    href: props.to,
    target: props.openInNewTab ? '_blank' : '',
  })`
    transition: all 300ms;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <StyledElement {...props}>
      <Typography {...props}>{props.children}</Typography>
    </StyledElement>
  );
};

export default L;
