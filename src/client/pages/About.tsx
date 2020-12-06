import React, { useState } from 'react';
import { Icon } from '../components/content-components';
import { Buttons } from '../components/element-components';
import { Flex, Grid, WindoW } from '../components/layout-components';
import { Typography } from '../components/typography-components';

interface DefaultState {
  base: Array<string>;
}

interface Props {
  defaultState: DefaultState;
}

const Home: React.FC<Props> = ({ defaultState }) => {
  // const [defaultState, setDefaultState] = useState({});

  return (
    <WindoW init xAlign="flex-start" yAlign="flex-start" column>
      <Flex column></Flex>
      <Flex yAlign="center" column>
        <Typography margin="20px 0" variant="h5">
          Buttons
        </Typography>

        <Buttons.Button
          background="safe"
          color="background"
          onClick={function () {}}
        >
          Click Me
        </Buttons.Button>
        <Icon size="veryLarge" name="send" color="safe"></Icon>
      </Flex>
    </WindoW>
  );
};

export default Home;
