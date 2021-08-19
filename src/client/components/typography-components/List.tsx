import React from "react";
import styled from "styled-components";

import { Typography } from "./index";

import { Styles, Interfaces, Types } from "../../../site-config";

interface ListItemProps {
  typographyConfig: Interfaces.Typography.Typography;
}

const ListItem = styled.li`
  font-size: ${(props) =>
    props.variant ? Styles.FontSizes[props.variant] : Styles.FontSizes.p};
`;

interface Props {
  items: Array<any>;
  listItemConfig: ListItemProps;
  direction?: "rtl";
  children?: any;
  variant?: "ol" | "ul";
  position?: "inside" | "outside";
  style?: object;
  margin?: string;
  padding?: string;
  displayAlign?: Interfaces.DisplayAlign;
}

const Element = (props) => React.createElement(props.variant || "ul", props);

const StyledElement = styled(Element).attrs({})`
  list-style-position: ${(props) =>
    props.position ? props.position : "inside"};
  direction: ${(props) => props.direction || "ltr"};
  color: ${(props) =>
    props.color
      ? Styles.Colors[props.listItem?.typographyConfig?.color]
      : Styles.Colors.textPrimary};
  ${(props) => Styles.Defaults.Spacing({ props })}

  & * {
    display: list-item;
  }
`;

const List: React.FC<Props> = (props) => {
  return (
    <StyledElement {...props}>
      {props.items.map((item, index) => {
        return typeof item === "string" ? (
          <Typography
            key={index}
            {...props.listItemConfig.typographyConfig}
            variant={props.listItemConfig?.typographyConfig?.variant || "p"}
          >
            {item}
          </Typography>
        ) : (
          item
        );
      })}
    </StyledElement>
  );
};
export default List;
