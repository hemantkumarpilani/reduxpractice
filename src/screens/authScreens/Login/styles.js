import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const loginStyle = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  outerContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 0.4,
  },
});

export default loginStyle;
