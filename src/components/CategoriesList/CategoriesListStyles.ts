import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleHeight, scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getCategoriesListStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    listStyle: {
      flex: 1,
      borderRadius: scaleWidth(12),
      backgroundColor: colors.background,
    },
    listContentStyle: {
      paddingVertical: scaleHeight(12, 0.5),
      paddingHorizontal: scaleWidth(12),
    },
    item: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: scaleHeight(4, 0.5),
    },
    leftIconWrapper: {
      aspectRatio: 1,
      width: scaleWidth(36),
      borderRadius: scaleWidth(18),
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: scaleWidth(8),
      backgroundColor: colors.card,
    },
    leftIcon: {
      fontSize: scaleFontSize(16),
      color: colors.border,
    },
    label: {
      ...Typography.body2,
      color: colors.text,
      flex: 1,
      paddingRight: scaleWidth(8),
    },
    rightIcon: {
      fontSize: scaleFontSize(24),
      color: colors.border,
    },
  });

export default getCategoriesListStyles;
