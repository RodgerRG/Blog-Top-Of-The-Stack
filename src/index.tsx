import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import TopNav from './components/TopNav';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import Home from './components/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import AboutPage from './components/AboutPage';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
      <TopNav />
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          PlaceHolder
        </Route>
        <Route exact path="/archives">
          PlaceHolder
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);