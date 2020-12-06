import React from 'react';
import styled from 'styled-components';
import { Styles, Interfaces } from '../../../site-config';

const iconSizes = {
  verySmall: '10px',
  small: '20px',
  normal: '30px',
  large: '40px',
  veryLarge: '50px',
};

const Element = styled.i<Interfaces.Icon>`
  font-size: ${(props) =>
    props.size ? iconSizes[props.size] : iconSizes.normal};
  color: ${(props) =>
    props.color ? Styles.Colors[props.color] : Styles.Colors.background};
`;

const Icon: React.FC<Interfaces.Icon> = (props) => {
  return (
    <Element {...props} className={`${props.provider || 'material-icons'}`}>
      {props.name}
    </Element>
  );
};

export default Icon;
