import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { Layout, Typography } from "../index";
import { Styles, Interfaces, siteConfig, Types } from "../../../site-config";
import NavMenu from "./NavMenus";
import NavLogo from "./NavLogo";
import store from "../../store";

interface NavProps {
  scrollY: number;
  clientWidth: number;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  min-height: 60px;
  position: ${siteConfig.client.nav.style.position};
  top: 0;
  left: 0;
  background: ${(props) =>
    props.clientWidth > siteConfig.client.required.layouts.tablet
      ? Styles.Colors.navBackground
      : "transparent"};
  z-index: 100;
  transition: all 300ms ease-in-out;

  transform: translateY(
    ${(props) =>
      props.scrollY > 800 ||
      store.window.clientWidth <= siteConfig.client.required.layouts.tablet
        ? 0
        : -100}%
  );
  height: ${(props) => siteConfig.client.nav.style.navHeight};
  box-shadow: ${props => props.clientWidth <= siteConfig.client.required.layouts.tablet ? 'none' : 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'};
`;

interface Props {}

const Navbar: React.FC<Props> = (props) => {



  return (
    <Nav
      id="navigation"
      {...props}
      clientWidth={store.window.clientWidth}
      scrollY={store.window.scrollY}
    >
      <NavMenu></NavMenu>
    </Nav>
  );
};

export default observer(Navbar);
