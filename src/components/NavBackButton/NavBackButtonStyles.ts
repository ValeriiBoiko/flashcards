import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getNavBackButtonStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    label: {
      ...Typography.caption,
      color: colors.brand,
      paddingLeft: scaleWidth(20),
    },
  });

export default getNavBackButtonStyles;
