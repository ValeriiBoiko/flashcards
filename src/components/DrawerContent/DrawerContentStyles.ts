import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {StyleSheet} from 'react-native';

const getDrawerContentStyles = ({colors, dimensions}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    overlay: {
      height: '100%',
      width: dimensions.width * 2,
      position: 'absolute',
    },
    blurContainer: {
      flex: 1,
    },

    content: {
      backgroundColor: colors.background,
      width: '70%',
      height: '100%',
      borderTopRightRadius: scaleWidth(20, 0.5),
      borderBottomRightRadius: scaleWidth(20, 0.5),
    },
  });

export default getDrawerContentStyles;
