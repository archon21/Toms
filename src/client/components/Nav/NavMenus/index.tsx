import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { siteConfig } from "../../../../site-config";
import { BrowserContext } from "../../../context";
import store from "../../../store";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

interface Props {
  disableMobileRender: boolean;
}

const NavMenu: React.FC<Props> = ({ disableMobileRender }) => {
  const browserContext = useContext(BrowserContext);

  const MenuContainer = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
    & > div#mobile-menu {
      display: none;
    }
    @media (max-width: 800px) {
      & > div {
        display: none !important;
      }
      & > div#mobile-menu {
        display: flex !important;
      }
    }
  `;

  return (
    <MenuContainer>
      <DesktopMenu></DesktopMenu>
      <MobileMenu></MobileMenu>
    </MenuContainer>
  );
};

export default NavMenu;
