import React from 'react';
import styled from 'styled-components';
import { colors, Colors } from '../site-config';

interface Props {
  background?: Colors;
}

const Nav = styled.nav<Props>`
    background:  ${(props) =>
      props.background ? colors[props.background] : colors.background};
    width: 100%;
    height: 70px;
    box-shadow: 1px 1px transparent;
    border-bottom: 1px solid #dadce0;

`;

const Navbar: React.FC<Props> = (props) => {
return <Nav {...props}></Nav>;
};

export default Navbar;
