import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { siteConfig, Styles } from "../../../../site-config";

import { Layout, Links, Buttons, Menus, Content } from "../../index";

const NavButton = styled.button`
  width: 60px;
  height: 60px;
  background: ${Styles.Colors.navMobileBackground};
  position: fixed;
  top: 15px;
  left: 15px;
  outline: none;
  z-index: 1000;
  border: none;
`;

const NavMenu = styled.div<{ isMenuOpen: boolean }>`

  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  background: ${Styles.Colors.navMobileBackground};
  display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
  transition: opacity 300ms ease-in-out;
  transition-delay: opacity 100ms;
  opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
  z-index: ${(props) => (props.isMenuOpen ? 1 : -1)};
  align-items: center;
  justify-content: center;


`;

interface Props {}

const MobileMenu: React.FC<Props> = () => {
  const calculatedNavHeight =
    global.document?.getElementById("navigation")?.clientHeight || 0;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [renderedLinks, setRenderedLinks] = useState(
    siteConfig.client.nav.links
  );

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <Layout.Flex
      noWrap
      height={siteConfig.client.nav.style.navHeight}
      id="mobile-menu"
      xAlign="flex-end"
      yAlign="center"
    >
      <NavMenu isMenuOpen={isMenuOpen}>
        {siteConfig.client.nav.links.map(({ url, text, id }) => {
          return (
            <Links.Link

              margin="30px 0"
              typographyConfig={{
                color: "textQuinary",
                variant: "h5",
                weight: "500",
              }}
              transitionConfig={{
                underline: true,
              }}
              key={text}
              to={url}
              externalConfig={null}
              onClick={() => {
                handleMenu();
                if (id) {
                  const content = global.document.getElementById(id);
                  if (content) {
                    const { x, y } = content.getBoundingClientRect();

                    const scrollTo = content.offsetTop - calculatedNavHeight;

                    global.window.scroll({ top: scrollTo, behavior: "smooth" });
                  }
                }
              }}
            >
              {text}
            </Links.Link>
          );
        })}
      </NavMenu>
      <NavButton color="background" onClick={handleMenu}>
        <Content.Icon
          color="backgroundSecondary"
          name={ !isMenuOpen ? "menu" : 'close'}
          size="normal"
          type="icon"
        >
          {" "}
        </Content.Icon>
      </NavButton>
    </Layout.Flex>
  );
};

export default MobileMenu;
