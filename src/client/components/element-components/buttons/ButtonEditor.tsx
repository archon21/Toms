import React from 'react';
import styled from 'styled-components';
import { Styles, Interfaces } from '../../../../site-config';
import { Colors } from '../../../../site-config/styles';
import { Icon } from '../../content-components';
import { Typography } from '../../typography-components';

interface ButtonProps {
  iconConfig: Interfaces.Icon;
  active: boolean;
  helperText: string;

  onMouseDown: any;

  background?: Interfaces.Colors;
  color?: Interfaces.Colors;

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
    props.background
      ? Styles.Colors[props.background]
      : Styles.Colors.background};
  color: ${(props) =>
    props.active ? Styles.Colors.buttonSecondary : Styles.Colors.disabled};

  border-radius: 999px;
  outline: none;
  border: none;
  padding: 0.1em 0.1em;
  z-index: 10;
  ${(props) => Styles.Defaults.Spacing({ props })}

  &:disabled {
    background: ${Styles.Colors.disabled};
    color: #fff;
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not([disabled]):hover {
    cursor: pointer;

    &:after {
      content: ${(props) => `'${props.helperText}'`};
      padding: 0.3em;
      bottom: 40px;
      color: ${Styles.Colors.buttonSecondary};
      box-shadow: -10px -10px 30px 4px ${Styles.Colors.boxShadow},
        10px 10px 30px 4px ${Styles.Colors.boxShadow};
      border-radius: 5px;
      background: ${Colors.background};
      position: absolute;
      font-size: 0.75em;
    }
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { onMouseDown, iconConfig } = props;

  return (
    <Element {...props} onMouseDown={onMouseDown}>
      <Icon {...iconConfig}></Icon>
    </Element>
  );
};
export default Button;
