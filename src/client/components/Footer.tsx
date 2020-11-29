import React from 'react';
import styled from 'styled-components';
import { colors, Colors, siteConfig } from '../site-config';

interface Props {
  background?: Colors;
}

const Foot = styled.footer<Props>`
  width: 100%;
  height: ${siteConfig.style.footerHeight};
  box-shadow: 1px 1px transparent;
  border-top: 1px solid #dadce0;
  background: ${(props) =>
    props.background ? colors[props.background] : colors.background};
`;

const Footer: React.FC<Props> = (props) => {
  return <Foot></Foot>;
};

export default Footer;
