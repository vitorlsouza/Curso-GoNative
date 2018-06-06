import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: metrics.statusBarHeight,
    height: 54 + metrics.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});

export default styles;
