import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import 'config/ReactotronConfig';
import CreateRoutes from './routes';

class App extends Component {
  state = {
    userExists: false,
    userChacked: false,
  }

  componentWillMount() {
    this.checkUser().then((response) => {
      this.setState({ userExists: response, userChacked: true });
    });
  }

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@Mod02:username');

    return user !== null;
  }

  render() {
    const { userExists, userChacked } = this.state;

    if (!userChacked) return null;

    const Layout = CreateRoutes(userExists);
    return <Layout />;
  }
}

export default App;
