import React, { Component } from 'react';
import { View, Linking, AsyncStorage } from 'react-native';
import Header from 'components/header';
import PropTypes from 'prop-types';
import api from 'services/api';
import Tab from './tab';
import IssuesContainer from './issuesContainer';

import styles from './styles';

class MyClass extends Component {
  static navigationOptions = {
    header: ({ scene }) => <Header goBackLista={scene.route.params.goBackLista} currentScreen="Issues" />,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
      setParams: PropTypes.func,
      state: PropTypes.object,
    }).isRequired,
  }

  state = {
    issues: [],
    refreshing: false,
    tabSelected: this.getAllIssues,
    tabAll: 'normal',
    tabOpen: 'normal',
    tabClosed: 'normal',
  }

  componentDidMount() {
    this.props.navigation.setParams({
      goBackLista: this.goBackLista,
    });
    this.loadIssues();
  }

  getAllIssues = async () => {
    this.setState({
      refreshing: true,
      tabSelected: this.getAllIssues,
      tabAll: 'bold',
      tabOpen: 'normal',
      tabClosed: 'normal',
    });
    const issues = await api.get(`repos/${this.props.navigation.state.params.full_name}/issues?state=all`);
    await AsyncStorage.setItem('@Des02:tab', 'all');
    this.setState({ issues: issues.data, refreshing: false });
  }

  closedIssues = async () => {
    this.setState({
      refreshing: true,
      tabSelected: this.closedIssues,
      tabAll: 'normal',
      tabOpen: 'normal',
      tabClosed: 'bold',
    });
    const issues = await api.get(`repos/${this.props.navigation.state.params.full_name}/issues?state=closed`);
    await AsyncStorage.setItem('@Des02:tab', 'closed');
    this.setState({ issues: issues.data, refreshing: false });
  }

  openIssues = async () => {
    this.setState({
      refreshing: true,
      tabSelected: this.openIssues,
      tabAll: 'normal',
      tabOpen: 'bold',
      tabClosed: 'normal',
    });
    const issues = await api.get(`repos/${this.props.navigation.state.params.full_name}/issues?state=open`);
    await AsyncStorage.setItem('@Des02:tab', 'open');
    this.setState({ issues: issues.data, refreshing: false });
  }

  loadIssues = async () => {
    const issues = await AsyncStorage.getItem('@Des02:tab');
    if (issues === 'all' || issues === '') {
      this.getAllIssues();
    } else if (issues === 'open') {
      this.openIssues();
    } else {
      this.closedIssues();
    }
  }

  goBackLista = () => {
    this.props.navigation.goBack();
  }

  openUrl = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        console.log('Não foi possível abrir a url');
        return false;
      }
      return Linking.openURL(url);
    }).catch(err => console.error('Ocorreu um erro', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Tab closed={this.closedIssues} open={this.openIssues} all={this.getAllIssues} tabAll={this.state.tabAll} tabOpen={this.state.tabOpen} tabClosed={this.state.tabClosed} />
        <IssuesContainer
          issues={this.state.issues}
          refreshing={this.state.refreshing}
          tab={this.state.tabSelected}
          openUrl={this.openUrl}
        />
      </View>
    );
  }
}

export default MyClass;
