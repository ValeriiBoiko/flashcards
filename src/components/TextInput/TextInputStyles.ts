import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleHeight, scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getTextInputStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    input: {
      ...Typography.body2,
      color: colors.text,
      height: scaleHeight(45, 0.5),
      borderRadius: scaleWidth(10),
      justifyContent: 'center',
      paddingHorizontal: scaleWidth(15),
      backgroundColor: colors.card,
    },
  });

export default getTextInputStyles;
