//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// create a component
class Organization extends Component {
  static propTypes = {
    organization: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {};

  render() {
    const { organization } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: organization.avatar_url }}/>
        <Text>{ organization.login }</Text>
      </View>
    );
  }
}


// make this component available to the app
export default Organization;
