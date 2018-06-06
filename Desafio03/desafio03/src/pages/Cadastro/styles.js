import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    backgroundColor: colors.white,
    width: metrics.screenWidth - 40,
    height: metrics.screenHeight - 480,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },

  title: {
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darker,
  },

  input: {
    marginTop: metrics.baseMargin * 2,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    padding: 10,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },

  buttonCancelar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: colors.cancelar,
    height: 42,
    borderRadius: metrics.baseRadius,
  },

  textCancelar: {
    color: colors.white,
  },

  buttonSalvar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: colors.salvar,
    height: 42,
    borderRadius: metrics.baseRadius,
    marginLeft: 15,
  },

  textSalvar: {
    color: colors.white,
  },

  loading: {
    color: colors.darkTransparent,
  },

  error: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.danger,
  },

});

export default styles;
