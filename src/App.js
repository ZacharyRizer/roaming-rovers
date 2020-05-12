import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grommet, Box } from 'grommet';
import theme from './theme';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RoverMainPage from './components/RoverMainPage';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Box fill>
          <NavBar />
          <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/:rover"
              render={(props) => (
                <>
                  <SideBar {...props} />
                  <RoverMainPage {...props} />
                </>
              )}
            />
          </Box>
        </Box>
      </BrowserRouter>
    </Grommet>
  );
};

export default App;
