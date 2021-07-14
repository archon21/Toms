import React from "react";
import { siteConfig } from "../../../../site-config";

import { Layout, Links } from "../../index";

interface Props {}

const DesktopMenu: React.FC<Props> = () => {
  return (
    <Layout.Flex
      xAlign="flex-end"
      height={siteConfig.client.nav.style.navHeight}
      yAlign="center"
    >
      {siteConfig.client.nav.links.map(({ url, text }) => {
        return (
          <Links.Link
            padding="0 0 0 10px"
            typographyConfig={{ color: "textPrimary", variant: "p" }}
            key={text}
            to={url}
            externalConfig={null}
          >
            {text}
          </Links.Link>
        );
      })}
    </Layout.Flex>
  );
};

export default DesktopMenu;
