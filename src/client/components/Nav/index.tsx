import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

import { Layout, Typography } from "../index";
import { Styles, Interfaces, siteConfig, Types } from "../../../site-config";

import NavMenu from "./NavMenus";
import NavLogo from "./NavLogo";
import { observer } from "mobx-react";
import store from "../../store";

interface Props {
  scrollY: number;
}

const Nav = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  min-height: 60px;
  position: ${siteConfig.client.nav.style.position};
  top: 0;
  left: 0;
  background: ${(props) => Styles.Colors.navBackground};
  z-index: 100;
  transition: all 300ms ease-in-out;

  transform: translateY(${(props) => (props.scrollY > 800 ? 0 : -100)}%);
  height: ${(props) => siteConfig.client.nav.style.navHeight};
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const Navbar: React.FC<Props> = (props) => {
  console.log("render");

  return (
    <Nav id="navigation" {...props} scrollY={store.window.scrollY}>
      <NavMenu></NavMenu>
    </Nav>
  );
};

export default observer(Navbar);
