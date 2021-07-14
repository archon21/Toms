import React from "react";

import styled from "styled-components";
import { Content } from "..";
import { siteConfig } from "../../../site-config";

interface Props {
  padding?: string;
  imageConfig: {
    items: Array<{ src: string; boxShadow: boolean }>;
    itemSpacing: string;
    dimensionsConfig: {
      width: string;
      height?: string;
    };
  };
}

const Vessel = styled.div<Props>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 19%);
  grid-gap: ${(props) => props.imageConfig.itemSpacing || "auto"};
  justify-content: center;

  @media screen and (max-width: ${siteConfig.client.required.layouts
      .tablet}px) {
    grid-template-columns: repeat(auto-fill, 23%);
  }

  @media screen and (max-width: ${siteConfig.client.required.layouts
      .mobile}px) {
    grid-template-columns: repeat(auto-fill, 45%);
    grid-gap: 5px;
  }
`;

const Grid: React.FC<Props> = (props) => {
  return (
    <Vessel {...props}>
      {props.imageConfig.items.map((item, index) => {
        return (
          <Content.Image
            key={index}
            {...item}
            {...props.imageConfig.dimensionsConfig}
          ></Content.Image>
        );
      })}
    </Vessel>
  );
};

export default Grid;
