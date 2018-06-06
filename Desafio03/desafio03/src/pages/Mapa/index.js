import React, { Component } from 'react';
import { View, Image } from 'react-native';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionsMap from 'store/actions/map';
import Cadastro from 'pages/Cadastro';

import styles from './styles';

class Map extends Component {
  state = {
    initialRegion: {
      latitude: -22.306058,
      longitude: -42.537986,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
  }

  openModal = (e) => {
    const coords = e.nativeEvent.coordinate;
    this.props.addMarker(coords);
    this.props.toogleModal(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onLongPress={e => this.openModal(e)}
          initialRegion={this.state.initialRegion}
        >
          {!this.props.info.length
            ? null
            : this.props.info.map(inf => (
              <MapView.Marker
                key={inf.response.id}
                coordinate={inf.coordinate}
                title={inf.response.name}
                description={inf.response.bio}
              >
                <Image source={{ uri: `${inf.response.avatar_url}` }} style={styles.avatar} />
              </MapView.Marker>
          ))}
        </MapView>
        <Cadastro />
      </View>
    );
  }
}

Map.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired,
  info: PropTypes.arrayOf(PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    map: PropTypes.func,
    length: PropTypes.func,
  })).isRequired,
};

const mapStateToProps = state => ({
  info: state.map.info,
  modal: state.map.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionsMap, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
