import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopNav extends React.Component<State, Props> {
  constructor(props : Props) {
    super(props);

    this.renderProjects = this.renderProjects.bind(this);
  }

  renderProjects() {
    //infuriatingly, we can't programmatically get files to serve them up.
    //either we set up a server, or manually change these....
  }

  render() {
    this.renderProjects();
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Top Of The Stack</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
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

export default connector(TopNav);