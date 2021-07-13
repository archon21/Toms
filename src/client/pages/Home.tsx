import React, { useState } from "react";

import { Layout, Typography, Content } from "../components";

interface DefaultState {
  base: Array<string>;
}

interface Props {
  defaultState: DefaultState;
}

const Home: React.FC<Props> = ({ defaultState }) => {
  // const [defaultState, setDefaultState] = useState({});

  return (
    <Layout.WindoW init xAlign="flex-start" yAlign="flex-start" column>
      <Layout.Flex margin="50px 0" column>
        <Typography.Typography
          color="textPrimary"
          variant="h1"
          textAlign="center"

          // displayAlign={{}}
        >
          Services
        </Typography.Typography>
        <Layout.Flex>
          <Content.Image src="/assets/images/services.jpeg"></Content.Image>
          <Typography.List
            items={[
              "Dumpster Rentals",
              "Deliveries",
              "Tractor Services",
              "Forest Maintenance",
              "Lawn and Garden",
              "Leaf Removal",
            ]}
            textConfig={{ variant: "h5" }}
          ></Typography.List>
        </Layout.Flex>

        {/* <Icon size="veryLarge" name="send" color="safe"></Icon> */}

        {/* <Buttons.Button
          background="safe"
          color="background"
          onClick={function () {}}
        >
          Click Me
        </Buttons.Button> */}
        {/* <Inputs.SlateEditor></Inputs.SlateEditor> */}
      </Layout.Flex>
    </Layout.WindoW>
  );
};

export default Home;
