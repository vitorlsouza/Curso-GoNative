import { StyleSheet } from 'react-native';
import { fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repositorio: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 22,
  },
  texto: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 30,
    padding: 10,
  },
  title: {
    flex: 1,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.title,
    width: 180,
  },
  description: {
    color: colors.description,
    fontSize: fonts.small,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
