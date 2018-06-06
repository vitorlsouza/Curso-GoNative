// import liraries
import React, { Component } from 'react';
import 'config/ReactotronConfig';

import Routes from './routes';

// create a component
class App extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Routes navigation={navigation}/>
    );
  }
}

// make this component available to the app
export default App;
