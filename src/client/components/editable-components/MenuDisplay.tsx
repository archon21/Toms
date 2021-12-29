import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocalStore, observer } from "mobx-react";
import Draggable from "react-draggable";

import { Content, Layout, Typography } from "..";
import { siteConfig, Styles } from "../../../site-config";
import store from "../../store";

const _getPriceDisplay = ({ price }) => {
  if (Array.isArray(price)) {
    return price
      .reduce((acc, curr) => {
        acc.push(_getPriceDisplay({ price: curr }));
        return acc;
      }, [])
      .join(" / ");
  } else if (typeof price === "number") {
    return Math.round(price / 100);
  }
  return price;
};

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
  max-width: 30em;
  border-radius: 3px;
`;

const MenuDisplayItem = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;

  padding: 0 0 0.5em 0;
  margin: 0 0 0.75em 0;
  width: 100%;
`;

const Line = styled.div`
  height: ${(props) => (props.height ? props.height : "1em")};
  background: ${(props) =>
    props.color ? Styles.Colors[props.color] : Styles.Colors.primary};
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
            <Layout.Flex
              width="85%"
              margin="0 0 2em"
              column
              yAlign="flex-start"
            >
              <Typography.Typography
                margin="0 0 1em"
                textAlign="left"
                color="textTertiary"
                fontFamily="secondary"
                variant="h4"
              >
                {name}
              </Typography.Typography>

              {description && (
                <Layout.Flex margin="0 0 1em" column>
                  {description.map((d) => {
                    return (
                      <Typography.Typography
                        margin="0 0 .2em"
                        textAlign="left"
                        color="textTertiary"
                        variant="p"
                      >
                        {d}
                      </Typography.Typography>
                    );
                  })}
                </Layout.Flex>
              )}

              <Layout.Flex></Layout.Flex>

              {items.map(({ name, price, description, unit, options, add , }) => {
                return (
                  <MenuDisplayItem>
                    <Layout.Flex yAlign="flex-start">
                      <Typography.Typography
                        weight="bold"
                        textAlign="left"
                        variant="p"
                        color="textTertiary"
                      >
                        {name}
                      </Typography.Typography>
                      {Boolean(description) && (
                        <Typography.Typography
                          margin="0 0 0 .4em"
                          textAlign="left"
                          variant="p"
                          color="textTertiary"
                          fontStyle="italic"
                        >
                          {" "}
                           {description}
                        </Typography.Typography>
                      )}
                    </Layout.Flex>
                    <Layout.Flex xAlign="flex-end" yAlign="flex-end" column style={{alignSelf: 'flex-start'}}>
                      <Typography.Typography
                        displayAlign={{
                          alignSelf: "center",
                          justifySelf: "flex-end",
                        }}
                        textAlign="right"
                        variant="p"
                        color="textTertiary"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {_getPriceDisplay({ price })} {unit && `- ${unit}`}
                      </Typography.Typography>
                    </Layout.Flex>
                    {options &&
                      options.map(({ price, name, unit }) => {
                        return (
                          <Fragment>
                            <Layout.Flex yAlign="flex-start">
                              <Typography.Typography
                                margin="0 0 0 .4em"
                                textAlign="left"
                                variant="p"
                                color="textTertiary"
                              >
                                - {name}
                              </Typography.Typography>
                            </Layout.Flex>

                            <Layout.Flex
                              xAlign="flex-end"
                              yAlign="flex-end"
                              column
                            >
                              <Typography.Typography
                                displayAlign={{
                                  alignSelf: "center",
                                  justifySelf: "flex-end",
                                }}
                                textAlign="right"
                                variant="p"
                                color="textTertiary"
                                style={{ whiteSpace: "nowrap" }}
                              >
                                {_getPriceDisplay({ price })}{" "}
                                {unit && `- ${unit}`}
                              </Typography.Typography>
                            </Layout.Flex>
                          </Fragment>
                        );
                      })}
                      {add &&
                      add.map(({ price, name, unit }) => {
                        return (
                          <Fragment>
                            <Layout.Flex yAlign="flex-end">
                              <Typography.Typography
                                margin="0 0 0 .4em"
                                textAlign="right"
                                variant="p"
                                color="textTertiary"
                              >
                                - {name}
                              </Typography.Typography>
                            </Layout.Flex>

                            <Layout.Flex
                              xAlign="flex-end"
                              yAlign="flex-end"
                              column
                            >
                              <Typography.Typography
                                displayAlign={{
                                  alignSelf: "center",
                                  justifySelf: "flex-end",
                                }}
                                textAlign="right"
                                variant="p"
                                color="textTertiary"
                                style={{ whiteSpace: "nowrap" }}
                              >
                                +{_getPriceDisplay({ price })}{" "}
                                {unit && `- ${unit}`}
                              </Typography.Typography>
                            </Layout.Flex>
                          </Fragment>
                        );
                      })}
                  </MenuDisplayItem>
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
