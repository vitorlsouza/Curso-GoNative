import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { fonts, colors } from 'styles';

import styles from './styles';

const Issue = props => (
  <TouchableOpacity
    onPress={() => props.openUrl(props.issue.html_url)}
  >
    <View style={styles.container}>
      <View style={styles.repositorio}>
        <Image style={styles.avatar} source={{ uri: `${props.issue.user.avatar_url}` }} />
        <View style={styles.texto}>
          <Text numberOfLines={1} style={styles.title}>{props.issue.title}</Text>
          <Text style={styles.description}>{props.issue.user.login}</Text>
        </View>
        <View style={styles.icon}>
          <Icon name="angle-right" size={fonts.big} color={colors.description} />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

Issue.propTypes = {
  issue: PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  }).isRequired,
  openUrl: PropTypes.func.isRequired,
};

export default Issue;
