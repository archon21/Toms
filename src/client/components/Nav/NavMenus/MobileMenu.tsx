import React, { Fragment, useState } from 'react';
import { siteConfig } from '../../../../site-config';
import { Flex } from '../../layout-components';

import { Button, Menus } from '../../element-components';

interface Props {}

const MobileMenu: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [renderedLinks, setRenderedLinks] = useState(siteConfig.nav.links);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      height={siteConfig.nav.style.navHeight}
      id="mobile-menu"
      xAlign="flex-end"
      yAlign="center"
    >
      <Button background="danger" color="background" onClick={handleMenu}>
        Menu
      </Button>
      <Menus.Menu
        isOpen={isMenuOpen}
        links={renderedLinks}
        handleMenu={handleMenu}
      ></Menus.Menu>
    </Flex>
  );
};

export default MobileMenu;
