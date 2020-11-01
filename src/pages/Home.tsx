import React from 'react'
import { WindoW } from '../layout-components'
import { Typography } from '../typography-components'

const Home = () => {
    return (
        <WindoW xAlign='center' yAlign='center' column>
          <Typography color='safe' variant='h1'>Hello</Typography>
          <Typography variant='h2'>Hello</Typography>
          <Typography variant='h3'>Hello</Typography>
          <Typography variant='h4'>Hello</Typography>
          <Typography variant='h5'>Hello</Typography>
          <Typography variant='h6'>Hello</Typography>
          <Typography variant='p'>Hello</Typography>
          <Typography variant='span'>Hello</Typography>
        </WindoW>
    )
}

export default Home