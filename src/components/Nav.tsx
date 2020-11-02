import React from 'react';
import styled from 'styled-components';
import { Flex, Grid } from '../layout-components';
import { colors, Colors, siteConfig } from '../site-config';
import { Link } from '../typography-components';

interface Props {
  background?: Colors;
}

const Nav = styled.nav<Props>`
  background: ${(props) =>
    props.background ? colors[props.background] : colors.background};
  width: 100%;
  height: ${siteConfig.style.navHeight};
  box-shadow: 1px 1px transparent;
  border-bottom: 1px solid #dadce0;
`;

const links = [{ path: '/', text: 'Home' }];

const Navbar: React.FC<Props> = (props) => {
  return (
    <Nav {...props}>
      <Grid layout={[50, 50]}>
        <Flex height={siteConfig.style.navHeight} yAlign="center">
          {links.map(({ path, text }) => {
            return (
              <Link key={text} variant="p" to={path}>
                Text
              </Link>
            );
          })}
        </Flex>
      </Grid>
    </Nav>
  );
};

export default Navbar;
