import React from "react";
import { siteConfig } from "../../../../site-config";

import { Layout, Links } from "../../index";

interface Props {}

const DesktopMenu: React.FC<Props> = () => {
  return (
    <Layout.Flex
      xAlign="flex-end"
      height={siteConfig.nav.style.navHeight}
      yAlign="center"
    >
      {siteConfig.nav.links.map(({ url, text }) => {
        return (
          <Links.Link padding='0 0 0 10px' color="textSecondary" key={text} variant="p" to={url}>
            {text}
          </Links.Link>
        );
      })}
    </Layout.Flex>
  );
};

export default DesktopMenu;
