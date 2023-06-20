import {StyleSheet} from 'react-native';
import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleHeight, scaleWidth} from '@theme/layout';

const getDrawerButtonStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    menuLine: {
      height: scaleHeight(2, 0.5),
      width: scaleWidth(20),
      backgroundColor: colors.border,
    },
    menuMiddleLine: {
      width: scaleWidth(15),
      marginVertical: scaleHeight(3, 0.5),
    },
  });

export default getDrawerButtonStyles;
