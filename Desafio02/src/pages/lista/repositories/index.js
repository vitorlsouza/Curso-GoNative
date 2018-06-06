import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import Repository from './repository';

const Repositories = (props) => {
  const {
    repos,
    refreshing,
    onLoadRepositories,
    navigation,
  } = props;
  return (
    <FlatList
      style={styles.container}
      data={repos}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => <Repository repos={item} navigation={navigation} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onLoadRepositories}
        />
      }
    />
  );
};

Repositories.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    login: PropTypes.string,
    avatar: PropTypes.string,
  })).isRequired,
  refreshing: PropTypes.bool.isRequired,
  onLoadRepositories: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigation: PropTypes.func,
  }).isRequired,
};


export default Repositories;
