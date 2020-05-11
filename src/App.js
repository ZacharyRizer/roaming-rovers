import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grommet, Box } from 'grommet';
import theme from './style';

import AppContext from './AppContext';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RoverDetails from './components/RoverDetails';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            showSearchBar,
            setShowSearchBar,
            showSideBar,
            setShowSideBar,
          }}>
          <Box fill>
            <NavBar />
            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Route exact path="/" component={HomePage} />
              <Route
                path="/:rover"
                render={(props) => (
                  <>
                    <SideBar {...props} />
                    <RoverDetails {...props} />
                  </>
                )}
              />
            </Box>
          </Box>
        </AppContext.Provider>
      </BrowserRouter>
    </Grommet>
  );
};

export default App;
