import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocalStore, observer } from "mobx-react";
import Draggable from "react-draggable";

import { Content, Layout, Typography } from "..";
import { siteConfig, Styles } from "../../../site-config";
import store from "../../store";

interface Props {
  //   padding?: string;
  //   imageConfig: {
  //     items: Array<{ src: string; boxShadow: boolean }>;
  //     itemSpacing: string;
  //     dimensionsConfig: {
  //       width: string;
  //       height?: string;
  //     };
  //   };
}

const Vessel = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  box-shadow: ${Styles.Colors.boxShadow};
  padding: 1.5em 0;

  justify-content: center;
  max-width: 800px;
  border-radius: 3px;
`;

const MenuDisplayItem = styled.div<Props>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 100%);

  justify-content: center;
`;
//   @media screen and (max-width: ${siteConfig.client.required.layouts
//       .tablet}px) {
//     grid-template-columns: repeat(auto-fill, 23%);
//   }

//   @media screen and (max-width: ${siteConfig.client.required.layouts
//       .mobile}px) {
//     grid-template-columns: repeat(auto-fill, 45%);
//     grid-gap: 5px;
//   }

const MenuDisplay: React.FC<Props> = observer((props) => {
  const { items } = props;

  return (
    <Vessel column xAlign="center">
      {Object.entries(items).map(
        ([key, { name, description, items }], index) => {
          return (
            <Layout.Flex width="85%" margin="0 0 2em" column yAlign="center">
              <Typography.Typography variant="h4">{name}</Typography.Typography>
              {items.map(({ name, price, description, unit }) => {
                return (
                  <Layout.Grid layout={[90, 10]}>
                    <Layout.Flex yAlign="flex-start">
                      <Typography.Typography
                        weight="bold"
                        textAlign="left"
                        variant="p"
                      >
                        {name}
                      </Typography.Typography>
                      {description && (
                        <Typography.Typography
                          margin="0 0 0 .4em"
                          textAlign="left"
                          variant="p"
                        >
                          {" "}
                          - {description}
                        </Typography.Typography>
                      )}
                    </Layout.Flex>
                    <Typography.Typography
                      displayAlign={{
                        alignSelf: "flex-end",
                        justifySelf: "flex-end",
                      }}
                      textAlign="right"
                      variant="p"
                      style={{whiteSpace: 'nowrap', }}
                    >
                      {Math.round(price / 100)}
                      {unit && `- ${unit}`}
                    </Typography.Typography>
                  </Layout.Grid>
                );
              })}
            </Layout.Flex>
          );
        }
      )}
      {props.children}
    </Vessel>
  );
});

export default MenuDisplay;
