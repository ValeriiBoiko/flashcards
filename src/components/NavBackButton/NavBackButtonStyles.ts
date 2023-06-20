import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {Font} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getNavBackButtonStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    label: {
      fontFamily: Font.POPPINS_MEDIUM,
      color: colors.brand,
      paddingLeft: scaleWidth(20),
    },
  });

export default getNavBackButtonStyles;
