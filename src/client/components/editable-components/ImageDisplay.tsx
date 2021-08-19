import React from "react";
import styled from "styled-components";
import { useLocalStore, observer } from "mobx-react";
import Draggable from "react-draggable";

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
  layoutConfig: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
}

const Vessel = styled.div<Props>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    auto-fill,
    ${(props) => props.layoutConfig.desktop}%
  );
  grid-gap: ${(props) => props.imageConfig.itemSpacing || "auto"};
  justify-content: center;

  @media screen and (max-width: ${siteConfig.client.required.layouts
      .tablet}px) {
    grid-template-columns: repeat(
      auto-fill,
      ${(props) => props.layoutConfig.tablet}%
    );
  }

  @media screen and (max-width: ${siteConfig.client.required.layouts
      .mobile}px) {
    grid-template-columns: repeat(
      auto-fill,
      ${(props) => props.layoutConfig.mobile}%
    );
  }
`;

const Grid: React.FC<Props> = (props) => {
  return (
    <Vessel {...props}>
      {props.imageConfig.items.map((item, index) => {
        return (
          <Content.Image
            // onClick={to}
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
