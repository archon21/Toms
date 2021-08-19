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
    <Layout.Flex yAlign="center">
      {siteConfig.client.nav.links.map(({ url, text, id }) => {
        return (
          <Links.Link
            margin="0 20px"
            typographyConfig={{
              color: "textTertiary",
              variant: "p",
              weight: "semi",
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
                  console.log(y, store.window.scrollY);
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
