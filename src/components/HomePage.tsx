import React from 'react';
import ReactMarkdown from 'react-markdown';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import raw from 'raw.macro';
import TopNav from './TopNav';
import { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import SplashPage from './SplashPage';

class Home extends React.Component<State, Props> {
  constructor(props : Props) {
    super(props);
  }

  render() {
    return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path='/'>
          <SplashPage />
        </Route>
      </Switch>
    </div>);
  }
}

interface RootState {
  //currentProject : string
}

type State = RootState & {

}

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps & {

}

const MapStateToProps = (state : any) => ({
  //currentProject : state.projectState.currentProject
});

const MapDispatchToProps = () => {
  return {

  }
}

const connector = connect(MapStateToProps, MapDispatchToProps);

export default connector(Home);