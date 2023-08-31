import React from 'react';
import Grid from './Grid';
import PrincipalandOtherDetails from './Principal&OtherDetails';
import VideoMap from './VideoMap';
import CopyrightDetails from './CopyrightDetails';

const Home = () => {
  return (
    <div>
      <Grid />
      <PrincipalandOtherDetails />
      <VideoMap />
      <CopyrightDetails />
    </div>
  )
}

export default Home
