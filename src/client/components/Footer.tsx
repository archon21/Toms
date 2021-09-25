import React from "react";
import styled from "styled-components";
import { Layout, Typography, Content } from ".";

import { Styles, Interfaces, siteConfig, Types } from "../../site-config";
import { SVG } from "../assets";

interface Props {
  background?: Types.Colors;
}

const Foot = styled.footer<Props>`
  width: 100%;
  height: ${siteConfig.client.nav.style.footerHeight};
  box-shadow: 1px 1px transparent;
  border-top: 1px solid #dadce0;
  background: ${(props) => Styles.Colors.footerBackground};
  padding: 1em 0;
`;

const Footer: React.FC<Props> = (props) => {
  return (
    <Foot>
      <Layout.Flex column>
        <Layout.Flex margin=".5em 0" column width="auto">
          <Typography.Typography color="textQuinary" variant="h5">
            (860) 830-3865
          </Typography.Typography>
        </Layout.Flex>
      </Layout.Flex>
    </Foot>
  );
};

export default Footer;
