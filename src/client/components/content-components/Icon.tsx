import React from 'react';
import styled from 'styled-components';
import { Styles, Interfaces } from '../../../site-config';

interface Props {
  size?: 'verySmall' | 'small' | 'normal' | 'large' | 'veryLarge';
  provider?: 'material-icons';
  name?: string;
  color?: Interfaces.Colors;
}

const iconSizes = {
  verySmall: '10px',
  small: '20px',
  normal: '30px',
  large: '40px',
  veryLarge: '50px',
};

const Element = styled.i<Props>`
  font-size: ${(props) => (props.size ? iconSizes[props.size] : iconSizes.normal)};
  color: ${(props) => (props.color ? Styles.Colors[props.color] : Styles.Colors.background)};
`;

const Icon: React.FC<Props> = (props) => {

  return (
    <Element {...props} className={`${props.provider || 'material-icons'}`}>
      {props.name}
    </Element>
  );
};

export default Icon;
