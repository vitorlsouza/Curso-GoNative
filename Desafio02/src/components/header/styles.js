import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + metrics.statusBarHeight,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: colors.searchBackground,
    color: colors.search,
    fontSize: fonts.small,
    padding: 8,
    borderRadius: 5,
    width: 300,
  },
  containerIssues: {
    backgroundColor: colors.white,
    height: 54 + metrics.statusBarHeight,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  titleDescription: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});

export default styles;
