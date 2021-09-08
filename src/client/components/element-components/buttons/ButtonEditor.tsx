import React from "react";
import styled from "styled-components";
import { Styles, Interfaces } from "../../../../site-config";
import { Colors } from "../../../../site-config/styles";
import { Icon } from "../../content-components";
import { Typography } from "../../typography-components";

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
  typographyConfig?: Interfaces.Typography.Typography;
}

const Element = styled.button<ButtonProps>`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  width: max-content;
  font-size: calc(0.7em + 1vw);
  cursor: pointer;
  background: ${(props) =>
    props.background
      ? Styles.Colors[props.background]
      : Styles.Colors.background};

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
      box-shadow: var(
        --devsite-button-primary-box-shadow-hover,
        0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15)
      );
      border-radius: 5px;
      background: ${Colors.background};
      position: absolute;
      font-size: 0.5em;
      z-index: 11;
    }
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { onMouseDown, iconConfig, typographyConfig } = props;

  return (
    <Element {...props} onMouseDown={onMouseDown}>
      {Boolean(iconConfig?.name) ? (
        <Icon {...iconConfig}></Icon>
      ) : (
        <Typography {...typographyConfig} textAlign="center" variant="p">
          {typographyConfig?.children}
        </Typography>
      )}
    </Element>
  );
};
export default Button;
