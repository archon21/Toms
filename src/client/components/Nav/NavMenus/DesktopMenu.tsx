import { observer } from "mobx-react";
import React from "react";
import { siteConfig } from "../../../../site-config";
import store from "../../../store";

import { Layout, Links } from "../../index";

interface Props {}

const DesktopMenu: React.FC<Props> = () => {
  const calculatedNavHeight =
    global.document?.getElementById("navigation")?.clientHeight || 0;

  return (
    <Layout.Flex yAlign="center" xAlign='center'>
      {siteConfig.client.nav.links.map(({ url, text, id }) => {
        return (
          <Links.Link

            margin=".25em .5em"
            typographyConfig={{
              color: "textQuinary",
              variant: "p",
              weight: "500",
            }}
            transitionConfig={{
              underline: true,
            }}
            key={text}
            to={url}
            externalConfig={null}
            onClick={() => {
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
    </Layout.Flex>
  );
};

export default observer(DesktopMenu);
