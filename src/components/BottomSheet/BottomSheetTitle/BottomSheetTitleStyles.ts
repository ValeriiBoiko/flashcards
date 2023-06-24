import {StyleSheet} from 'react-native';
import {TCreateStylesParams} from '@hooks/useStyles';
import {Font, Typography} from '@theme/typography';
import {scaleHeight} from '@theme/layout';

const getBottomSheetTitleStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    title: {
      ...Typography.subtitle1,
      fontFamily: Font.POPPINS_SEMIBOLD,
      color: colors.text,
      textAlign: 'center',
      marginVertical: scaleHeight(16, 0.5),
    },
  });

export default getBottomSheetTitleStyles;
