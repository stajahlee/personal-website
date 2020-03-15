import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Categories from './modules/views/Categories';
import GetInTouch from './modules/views/GetInTouch';
import AppFooter from './modules/views/AppFooter';
import Intro from './modules/views/Intro';
import FrontAppBar from './modules/views/FrontAppBar';

function Index() {
  return (
    <React.Fragment>
      <FrontAppBar />
      <Intro />
      <Categories />
      <GetInTouch />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
