import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import api from 'services/api';
import Header from 'components/header';
import PropTypes from 'prop-types';
import Repositories from './repositories';

export default class Lista extends Component {
  static navigationOptions = {
    header: ({ scene }) => (
      <Header addRepository={repoName => scene.route.params.addRepository(repoName)} currentScreen="Lista" />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func,
    }).isRequired,
  }

  state = {
    repositories: [],
    refreshing: false,
  }

  componentWillMount() {
    this.loadRepositories();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      addRepository: this.addRepository,
    });
  }

  addRepository = async (repoName) => {
    if (!repoName) {
      Alert.alert('digite um repositorio!');
      return;
    }

    try {
      const response = await api.get(`/repos/${repoName}`);
      if (!response) throw Error();
      if (response.status === 404) {
        Alert.alert('Repositório não existe');
      }
      if (this.state.repositories.find(rep => rep.id === response.data.id)) {
        this.alreadyExists();
        throw Error();
      }
      const { repositories } = this.state;

      const {
        id,
        name,
        full_name,
        owner: { login, avatar_url },
      } = response.data;

      const repository = {
        id,
        name,
        full_name,
        login,
        avatar: avatar_url,
      };
      await AsyncStorage.setItem('@Des02:repositories', JSON.stringify([repository, ...repositories]));
    } catch (error) {
      console.tron.log('Erro');
    }
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@Des02:repositories')
      .then(response => (response ? JSON.parse(response) : []));
    this.setState({ repositories, refreshing: false });
  }

  alreadyExists = () => {
    Alert.alert('repositório já existe');
  }

  render() {
    const { repositories, refreshing } = this.state;

    return (
      <Repositories
        navigation={this.props.navigation}
        repos={repositories}
        refreshing={refreshing}
        onLoadRepositories={this.loadRepositories}
      />
    );
  }
}
