import React from "react";
import { ConnectedProps, connect } from "react-redux";

class SplashPage extends React.Component {

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

export default connector(SplashPage);