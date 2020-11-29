import React from 'react';
import styled from 'styled-components';
import { colors, Colors } from '../../site-config';

interface ButtonProps {
  children: React.ReactNode;
  background?: Colors;
  color?: Colors;
  onClick: any;
  margin?: string;
  padding?: string;
  disabled?: boolean;

}

const Element = styled.button<ButtonProps>`
  
  width: auto;
  min-width: 120px;
  height: 60px;
  cursor: pointer;
  background: ${(props) =>
    props.background ? colors[props.background] : colors.background};
  color: ${(props) => (props.color ? colors[props.color] : colors.background)};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  border-radius: 5px;
  outline: none;
  
  &:disabled {
    background: ${colors.disabled};
    color: #fff;
    opacity: .7;
    cursor: not-allowed;
  }
  &:not([disabled]):hover {
    cursor: pointer;
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  return <Element {...props}>{props.children}</Element>;
};
export default Button;
