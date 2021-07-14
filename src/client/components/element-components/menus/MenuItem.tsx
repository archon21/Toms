import React from "react";
import styled from "styled-components";
import { Styles } from "../../../../site-config";

import { Link } from "../links";

interface Props {
  label: string;
  url: string;
}

const Vessel = styled.li<Props>`
    width: 5em;
    padding: .5em;
    background ${Styles.Colors.backgroundSecondary};
    border-radius: 0;
    @media (max-width: 768px) {
        flex-direction: column;
      }

`;

const MenuItem: React.FC<Props> = (props) => {
  const { label, url } = props;
  return (
    <Vessel {...props}>
      <Link
        key={label}
        typographyConfig={{ variant: "p", color: "textPrimary" }}
        to={url}
        externalConfig={null}
      >
        {label}
      </Link>
    </Vessel>
  );
};

export default MenuItem;
