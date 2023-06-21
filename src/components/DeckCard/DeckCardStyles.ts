import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleHeight} from '@theme/layout';
import {TCreateStylesParams} from '@hooks/useStyles';
import {Typography} from '@theme/typography';

const getDeckCardStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    icon: {
      color: colors.brand,
      marginTop: scaleHeight(5, 0.5),
      fontSize: scaleFontSize(36, 0.5),
      marginBottom: scaleHeight(15, 0.5),
    },
    title: {
      ...Typography.subtitle1,
      color: colors.text,
    },
    subtitle: {
      ...Typography.caption,
      color: colors.border,
      marginBottom: scaleHeight(15, 0.5),
    },
  });

export default getDeckCardStyles;
