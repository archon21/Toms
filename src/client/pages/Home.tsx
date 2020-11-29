import React from 'react';
import { Icon } from '../content-components';
import { Button } from '../element-components';
import { Flex, Grid, WindoW } from '../layout-components';
import { Typography } from '../typography-components';

const Home = () => {
  return (
    <WindoW init xAlign="center" yAlign="center" column>
      <Flex margin="100px 0" column>
        <Typography color="safe" variant="h1">
          Typography
        </Typography>
        <Typography variant="h2">Typography</Typography>
        <Typography variant="h3">Typography</Typography>
        <Typography variant="h4">Typography</Typography>
        <Typography variant="h5">Typography</Typography>
        <Typography variant="h6">Hello</Typography>
        <Typography variant="p">Hello</Typography>
        <Typography variant="span">Hello</Typography>
      </Flex>
      <Flex yAlign="center" column>
        <Typography margin='20px 0' variant="h5">Buttons</Typography>
        <Button background="safe" onClick={() => console.log('click')}>
          Click Me
        </Button>
        <Icon size="veryLarge" name="send" color="safe"></Icon>
      </Flex>
    </WindoW>
  );
};

export default Home;
