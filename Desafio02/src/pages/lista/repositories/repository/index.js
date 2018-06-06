import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { fonts, colors } from 'styles';

import styles from './styles';

const Repository = (props) => {
  const {
    name,
    full_name,
    login,
    avatar,
  } = props.repos;

  const { navigate } = props.navigation;

  return (
    <TouchableOpacity
      onPress={() => navigate('Issues', { full_name })}
    >
      <View style={styles.container}>
        <View style={styles.repositorio}>
          <Image style={styles.avatar} source={{ uri: `${avatar}` }} />
          <View style={styles.texto}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{login}</Text>
          </View>
          <View style={styles.icon}>
            <Icon name="angle-right" size={fonts.big} color={colors.description} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Repository.propTypes = {
  repos: PropTypes.shape({
    name: PropTypes.string,
    login: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Repository;
