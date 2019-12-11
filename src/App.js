import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import NavbarContainer from './Navbar/NavbarContainer';

import './App.css';
import Routes from './Routes';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware(thunk)),
  ),
);



function App() {
  return (
    <Provider store={store}>

      <Router>
        <NavbarContainer />
        <div>
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
