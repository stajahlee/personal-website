import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Categories from './modules/views/Categories';
import GetInTouch from './modules/views/GetInTouch';
import AppFooter from './modules/views/AppFooter';
import Intro from './modules/views/Intro';
import HomeAppBar from './modules/components/HomeAppBar';

function Index() {
  return (
    <React.Fragment>
      <HomeAppBar />
      <Intro />
      <Categories />
      <GetInTouch />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
