import React, { Fragment, useState } from "react";
import { siteConfig } from "../../../../site-config";

import { Layout, Links, Buttons, Menus } from "../../index";

interface Props {}

const MobileMenu: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [renderedLinks, setRenderedLinks] = useState(siteConfig.nav.links);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Layout.Flex
      height={siteConfig.nav.style.navHeight}
      id="mobile-menu"
      xAlign="flex-end"
      yAlign="center"
    >
      <Buttons.Button
        background="danger"
        color="background"
        onClick={handleMenu}
      >
        Menu
      </Buttons.Button>
      <Menus.Menu
        isOpen={isMenuOpen}
        links={renderedLinks}
        handleMenu={handleMenu}
      ></Menus.Menu>
    </Layout.Flex>
  );
};

export default MobileMenu;
