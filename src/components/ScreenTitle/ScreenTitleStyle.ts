import {TCreateStylesParams} from '@hooks/useStyles';
import {Font, Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getScreenTitleStyle = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    title: {
      ...Typography.headline5,
      fontFamily: Font.POPPINS_BOLD,
      color: colors.text,
    },
  });

export default getScreenTitleStyle;
