//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'services/api';

import Organization from './components/organization';
import styles from './styles';

// create a component
class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    ),
  };

  state = {
    organizations: [],
    loading: false,
  };

  componentWillMount() {
    this.setState({ loading: true });

    this.loadOrganizations().then(() => {
      this.setState({ loading: false });
    });
  }

  loadOrganizations = async () => {
    username = await AsyncStorage.getItem('@Mod02:username');
    response = await api.get(`/users/${username}/orgs`);

    this.setState({ organizations: response.data});
  }

  renderOrganizations = () => (
    this.state.organizations.map(organization => (
      <Organization key={organization.id} organization={organization} />
    ))
  )

  renderList = () => (
    this.state.organizations.length
      ? this.renderOrganizations()
      : <Text style={styles.empty}>Nenhuma organização encontrada</Text>
  )

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.state.loading
          ? <ActivityIndicator size="small" color="#999" />
          : this.renderList()
        }
      </ScrollView>
    );
  }
}

//make this component available to the app
export default Organizations;
