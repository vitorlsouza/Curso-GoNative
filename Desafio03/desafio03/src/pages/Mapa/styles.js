import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  avatar: {
    width: 45,
    height: 45,
    borderWidth: 3,
    borderColor: colors.white,
    borderRadius: 22.5,
  },

});


export default styles;
