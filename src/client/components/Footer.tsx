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
          <Typography.Typography color="textTertiary" variant="p">
            ​Sunday - Tuesday: Closed
          </Typography.Typography>
          <Typography.Typography color="textTertiary" variant="p">
            Wednesday - Thursday: 5pm - 9pm
          </Typography.Typography>
          <Typography.Typography color="textTertiary" variant="p">
            ​​Friday - Saturday: 5pm - 9pm
          </Typography.Typography>
        </Layout.Flex>
        <Layout.Flex margin=".5em 0" column width="auto">
          <Content.Icon type="svg" name="facebook"></Content.Icon>
        </Layout.Flex>

        <Layout.Flex margin=".5em 0" column width="auto">
          <Typography.Typography color="textTertiary" variant="p">
            68 Linwood Ave
          </Typography.Typography>
          <Typography.Typography color="textTertiary" variant="p">
            Colchester, CT 06415
          </Typography.Typography>
          <Typography.Typography color="textTertiary" variant="p">
            (860)603-6948
          </Typography.Typography>
        </Layout.Flex>
      </Layout.Flex>
    </Foot>
  );
};

export default Footer;
