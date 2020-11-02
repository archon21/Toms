import React from 'react';
import { Button } from '../element-components';
import { Flex, Grid, WindoW } from '../layout-components';
import { Typography } from '../typography-components';

const Home = () => {
  return (
    <WindoW init xAlign="center" yAlign="center" column>
      <Typography color="safe" variant="h1">
        Hello
      </Typography>
      <Typography variant="h2">Hello</Typography>
      <Typography variant="h3">Hello</Typography>
      <Flex yAlign="flex-start" xAlign="center">
        <Typography variant="h4">Hello</Typography>
        <Typography variant="h5">Hello</Typography>
      </Flex>
      <Button  background='safe' onClick={() => console.log('click')}>Hello</Button>
      <Grid layout={[23, 40, 17]}>
        <Typography variant="h6">Hello</Typography>
        <Typography variant="p">Hello</Typography>
        <Typography variant="span">Hello</Typography>
      </Grid>
    </WindoW>
  );
};

export default Home;
