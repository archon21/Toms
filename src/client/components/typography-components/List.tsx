import React from "react";
import styled from "styled-components";

import { Typography } from "./index";

import { Styles, Interfaces, Types } from "../../../site-config";

interface ListItemProps {
  typographyConfig: Interfaces.Typography.Typography;
}

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
`;

const List: React.FC<Props> = (props) => {
  return (
    <StyledElement {...props}>
      {props.items.map((item, index) => {
        return typeof item === "string" ? (
          <Typography
            key={index}
            {...props.listItemConfig.typographyConfig}
            variant="li"
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
