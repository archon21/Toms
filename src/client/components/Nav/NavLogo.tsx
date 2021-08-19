import React from "react";
import styled from "styled-components";

import { Content, Layout, Typography } from "../index";
import { Styles, Interfaces, siteConfig, Types } from "../../../site-config";

interface Props {
  background?: Types.Colors;
}

const NavLogo: React.FC<Props> = (props) => {
  return (
    <Content.Image
      src={siteConfig.client.required.window.title.logo}
      boxShadow={false}
      width='20em'
      maxWidth="240px"
    ></Content.Image>
  );
};

export default NavLogo;
