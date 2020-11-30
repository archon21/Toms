import React from 'react';
import styled from 'styled-components';
import { colors, Interfaces } from '../../../../site-config';
import { Typography } from '../../typography-components';

interface ButtonProps {
  children: React.ReactNode;
  background?: Interfaces.Colors;
  color?: Interfaces.Colors;
  onClick: any;
  margin?: string;
  padding?: string;
  disabled?: boolean;
}

const Element = styled.button<ButtonProps>`
  display: inline-flex;
  flex-direction: column;
  width: max-content;
  font-size: calc(0.7em + 1vw);
  cursor: pointer;
  background: ${(props) =>
    props.background ? colors[props.background] : colors.background};
  color: ${(props) => (props.color ? colors[props.color] : colors.background)};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  border-radius: 3px;
  outline: none;
  padding: 0.2em 0.3em;
  border: none;
  z-index: 10;

  &:disabled {
    background: ${colors.disabled};
    color: #fff;
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not([disabled]):hover {
    cursor: pointer;
    box-shadow: var(
      --devsite-button-primary-box-shadow-hover,
      0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15)
    );
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <Element {...props} onClick={onClick}>
      <Typography {...props} variant="span">
        {props.children}
      </Typography>
    </Element>
  );
};
export default Button;
