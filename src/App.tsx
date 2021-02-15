import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import TopNav from './components/TopNav';
import Home from './components/HomePage';
import Article from './components/Article';

import articles from './articles/Articles'

const App: React.FC = () => {
  return <>
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
  </>;
}

export default App;
