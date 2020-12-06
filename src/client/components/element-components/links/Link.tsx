import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Styles, Interfaces } from '../../../../site-config';
import { Typography } from '../../typography-components';

interface Props {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  style?: object;
  margin?: string;
  padding?: string;
  color?: Interfaces.Colors;
  textAlign?: 'left' | 'center' | 'right';
  weight?: 'bold' | 'semi' | 'normal';
  fontFamily?: Interfaces.FontFamily;
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
    to: props.to,
  })`
    transition: all 300ms;
    text-decoration: none;
    color: ${props.color ? Styles.Colors[props.color] : Styles.Colors.primary};
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <StyledElement {...props} color={'background'}>
      <Typography {...props}>{props.children}</Typography>
    </StyledElement>
  );
};

export default L;
