import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';

import AboutPage from './components/AboutPage';
import TopNav from './components/TopNav';
import Home from './components/HomePage';
import Article from './components/Article';

import articles from './articles/Articles'

const App: React.FC = () => {
  return <Provider store = {store}>
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
        { 
          articles.map(article => 
            <Route exact path={ `/${article.route}` }>
              <Article article={ article }/>
            </Route>
          ) 
        }
      </Switch>
    </BrowserRouter>
  </Provider>;
}

export default App;
