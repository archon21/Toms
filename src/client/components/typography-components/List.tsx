import React from "react";
import styled from "styled-components";

import { Typography } from "./index";

import { Styles, fontFamily, Interfaces } from "../../../site-config";

interface ListItemProps {
  typographyConfig: {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    fontFamily?: "primary" | "secondary";
  };
}

interface Props {
  items: Array<any>;
  children?: any;
  variant?: "ol" | "ul";
  listItemConfig: ListItemProps;
  position?: "inside" | "outside";
  style?: object;
  margin?: string;
  padding?: string;

  textAlign?: "left" | "center" | "right";
  weight?: "bold" | "semi" | "normal";
  fontFamily?: Interfaces.FontFamily;
  displayAlign?: Interfaces.DisplayAlign;
}

const Element = (props) => React.createElement(props.variant || "ul", props);

const StyledElement = styled(Element).attrs({})`
  list-style-position: ${(props) =>
    props.position ? props.position : "inside"};
  ${(props) => Styles.Defaults.Spacing({ props })}
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
