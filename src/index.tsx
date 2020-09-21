import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import TopNav from './components/TopNav';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import Home from './components/HomePage';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);