import React from 'react';
import styled from 'styled-components';
import { Image } from '../content-components';
import { Flex, Grid } from '../layout-components';
import { colors, Interfaces, siteConfig } from '../../site-config';
import { Link } from '../typography-components';

interface Props {
  background?: Interfaces.Colors;
}

const Nav = styled.nav<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
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
      <Grid width="90%" layout={[50, 50]}>
        <Image
          height={siteConfig.style.navHeight}
          src="https://www.logolynx.com/images/logolynx/c7/c7c248a2814b2049d22615ae332559de.jpeg"
        ></Image>
        <Flex
          xAlign="flex-end"
          height={siteConfig.style.navHeight}
          yAlign="center"
        >
          {links.map(({ path, text }) => {
            return (
              <Link color='safe' key={text} variant="h6" to={path}>
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
