//  import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import api from 'services/api';

import styles from './styles';

// create a component
class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  state = {
    username: '',
    loading: false,
    error: false,
  }

  checkUserAndSave = async () => {
    const response = await api.get(`/users/${this.state.username}`);

    if (!response.ok) throw Error;
  }

  navigateToUser = () => {
    if (this.state.username.length === 0) return;

    this.setState({ loading: true, error: false });
    this.checkUserAndSave()
      .then(() => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });
        dispatch(resetAction);
        AsyncStorage.setItem('@Mod02:username', this.state.username);
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Bem-vindo</Text>
        <Text style={styles.welcomeDescription}>
          Para continuar, precisamos que você informe seu usuário no Gihtub
        </Text>

        {this.state.error && <Text style={styles.error}>Usuário não existe!</Text>}

        <TextInput
          autoCapitalize="none"
          autoCorret={false}
          style={styles.input}
          placeholder="Digite seu usuário"
          onChangeText={(username) => { this.setState({ username }); }}
        />
        <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
          {this.state.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : <Text style={styles.buttonText}>Prosseguir</Text>}
        </TouchableOpacity>
      </View>
    );
  }
}

//  make this component available to the app
export default Welcome;
