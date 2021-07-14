import React, { useState } from "react";

import { Layout, Typography, Content, Inputs, Editable } from "../components";

interface DefaultState {
  base: Array<string>;
}

interface Props {
  defaultState: DefaultState;
}

const Home: React.FC<Props> = ({ defaultState }) => {
  // const [defaultState, setDefaultState] = useState({});

  return (
    <React.Fragment>
      <Layout.WindoW init xAlign="flex-start" yAlign="flex-start" column>
        <Layout.Grid centerMobile margin="50px 0" layout={[50, 50]}>
          <Layout.Flex column xAlign="flex-start" yAlign="flex-start">
            <Typography.Typography
              color="textPrimary"
              variant="h5"
              displayAlign={{ alignSelf: "flex-start" }}
              textAlign="left"
              margin="0 0 15px"
            >
              Services
            </Typography.Typography>
            <Typography.List
              items={[
                "Dumpster Rentals",
                "Deliveries",
                "Tractor Services",
                "Forest Maintenance",
                "Lawn and Garden",
                "Leaf Removal",
              ]}
              listItemConfig={{ typographyConfig: { variant: "h5" } }}
            ></Typography.List>
          </Layout.Flex>
          <Layout.Flex xAlign="flex-end" yAlign="flex-end">
            <Content.Image
              boxShadow={true}
              width="25em"
              src="/assets/images/services.jpeg"
            ></Content.Image>
          </Layout.Flex>
        </Layout.Grid>
      </Layout.WindoW>
      <Layout.WindoW
        xAlign="flex-start"
        yAlign="flex-start"
        column
        background="backgroundSecondary"
      >
        <Layout.Flex margin="50px 0" column>
          <Typography.Typography
            color="textSecondary"
            variant="h1"
            textAlign="center"
            margin="0 0 .5em"
          >
            Dumpster Rentals
          </Typography.Typography>
          <Inputs.SlateEditor></Inputs.SlateEditor>
          <Editable.ImageDisplay
            imageConfig={{
              items: [
                { src: "/assets/images/services.jpeg", boxShadow: false },
                { src: "/assets/images/services.jpeg", boxShadow: false },
                { src: "/assets/images/services.jpeg", boxShadow: false },
                { src: "/assets/images/services.jpeg", boxShadow: false },
                { src: "/assets/images/services.jpeg", boxShadow: false },
                { src: "/assets/images/services.jpeg", boxShadow: false },
                { src: "/assets/images/services.jpeg", boxShadow: false },
              ],
              itemSpacing:"1em",

              dimensionsConfig: {
                width: "10em",
                
              },
            }}
          ></Editable.ImageDisplay>
        </Layout.Flex>
      </Layout.WindoW>
    </React.Fragment>
  );
};

export default Home;
