import React from 'react';
import { siteConfig } from '../../../../site-config';
import { Links } from '../../element-components';
import { Flex } from '../../layout-components';

interface Props {}

const DesktopMenu: React.FC<Props> = () => {
  return (
    <Flex
      xAlign="flex-end"
      height={siteConfig.nav.style.navHeight}
      yAlign="center"
    >
      {siteConfig.nav.links.map(({ url, text }) => {
        
        return (
          <Links.Link color="safe" key={text} variant="p" to={url}>
            Text
          </Links.Link>
        );
      })}
    </Flex>
  );
};

export default DesktopMenu;
