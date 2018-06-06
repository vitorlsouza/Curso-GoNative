import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, fonts } from 'styles';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    addRepository: PropTypes.func,
    goBackLista: PropTypes.func,
    currentScreen: PropTypes.string.isRequired,
  }

  static defaultProps = {
    addRepository: this.addRepository,
    goBackLista: this.goBackLista,
  }

  state = {
    name: '',
    bold: 'normal',
    opacityText: 0.5,
  }

  onFocusSearch = () => {
    this.setState({ bold: 'bold' });
    this.setState({ opacityText: 1 });
  }

  onbBlurSearch = () => {
    this.setState({ opacityText: 0.5 });
    this.setState({ bold: 'normal' });
  }

  addRepository = () => {
    const { name } = this.state;
    this.props.addRepository(name);
    this.setState({ name: '' });
  }

  goBackLista = () => {
    this.props.goBackLista();
  }

  render() {
    const { bold, opacityText } = this.state;

    if (this.props.currentScreen === 'Issues') {
      return (
        <View style={styles.containerIssues}>
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={this.props.goBackLista}
            >
              <Icon name="chevron-left" size={fonts.big} color={colors.button} />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleDescription}>rocketnative</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Adicionar Repositório"
          style={[styles.input, { fontWeight: bold, opacity: opacityText }]}
          onChangeText={name => this.setState({ name })}
          onFocus={this.onFocusSearch}
          onBlur={this.onbBlurSearch}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={this.addRepository}
        >
          <Icon name="plus" size={fonts.regular} color={colors.button} />
        </TouchableOpacity>
      </View>
    );
  }
}

