import React, { Component } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionMap from 'store/actions/map';

import styles from './styles';

class Cadastro extends Component {
  static propTypes = {
    modal: PropTypes.bool.isRequired,
    toogleModal: PropTypes.func.isRequired,
    addInfoRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }

  static defaultProps = {
    error: '',
  }

  state = {
    user: '',
  }

  saveAndCloseModal = () => {
    this.props.addInfoRequest(this.state.user);
    this.setState({ user: '' });
  }

  render() {
    console.tron.log(this.props);
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.props.modal}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Adicionar novo local</Text>
              {!!this.props.error &&
                <Text style={styles.error}>{this.props.error}</Text>
              }
            </View>
            <TextInput
              style={styles.input}
              placeholder="Usuário no Github"
              autoCapitalize="none"
              value={this.state.user}
              onChangeText={user => this.setState({ user })}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.buttonCancelar}
                onPress={() => this.props.toogleModal(false)}
              >
                <Text style={styles.textCancelar}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonSalvar}
                onPress={this.saveAndCloseModal}
              >
                {this.props.loading
                ? <ActivityIndicator size="small" color={styles.loading.color} />
                : <Text style={styles.textSalvar}>Salvar</Text>
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.map.modal,
  markers: state.map.markers,
  loading: state.map.loading,
  error: state.map.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionMap, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
