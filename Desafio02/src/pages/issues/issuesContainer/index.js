import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Issue from './issue';


const IssuesContainer = props => (
  <FlatList
    style={styles.container}
    data={props.issues}
    keyExtractor={issue => issue.id}
    renderItem={({ item }) => <Issue issue={item} openUrl={props.openUrl} />}
    refreshControl={
      <RefreshControl
        refreshing={props.refreshing}
        onRefresh={props.tab}
      />
    }
  />
);

IssuesContainer.propTypes = {
  tab: PropTypes.tab,
}.isRequired;

export default IssuesContainer;
