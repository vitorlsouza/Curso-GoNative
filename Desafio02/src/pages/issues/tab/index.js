import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Tab = props => (

  <View style={styles.container}>
    <View>
      <TouchableOpacity
        onPress={props.all}
      >
        <Text style={[styles.todas, { fontWeight: props.tabAll }]}>Todas</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity
        onPress={props.open}
      >
        <Text style={[styles.abertas, { fontWeight: props.tabOpen }]}>Abertas</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity
        onPress={props.closed}
      >
        <Text style={[styles.fechadas, { fontWeight: props.tabClosed }]}>Fechadas</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Tab.propTypes = {
  all: PropTypes.func,
  open: PropTypes.func,
  closed: PropTypes.func,
}.isRequired;

export default Tab;
