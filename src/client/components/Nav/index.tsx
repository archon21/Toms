import React from "react";
import styled from "styled-components";

import { Layout, Typography } from "../index";
import { Styles, Interfaces, siteConfig, Types } from "../../../site-config";

import NavMenu from "./NavMenus";

interface Props {
  background?: Types.Colors;
}




const Nav = styled.nav<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Styles.Colors.navBackground};
  width: 100%;
  height: ${siteConfig.client.nav.style.navHeight};
  min-height: 60px;
  box-shadow: 1px 1px transparent;
  border-bottom: 1px solid #dadce0;
`;

const Navbar: React.FC<Props> = (props) => {
  return (
    <Nav {...props}>
      <Layout.Grid width="90%" layout={[50, 50]}>
        {/* <Image
          height={siteConfig.nav.style.navHeight}
          src="https://www.logolynx.com/images/logolynx/c7/c7c248a2814b2049d22615ae332559de.jpeg"
        ></Image> */}
        <Typography.Typography
          variant="h5"
          color="textSecondary"
          displayAlign={{ justifySelf: "flex-start" }}
          textAlign='left'
        >
          Tom's Outdoor Maintenance
        </Typography.Typography>
        <NavMenu></NavMenu>
      </Layout.Grid>
    </Nav>
  );
};

export default Navbar;
