import {TCreateStylesParams} from '@hooks/useStyles';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getEmptyScreenPlaceholderStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...Typography.headline6,
      color: colors.secondary,
    },
  });

export default getEmptyScreenPlaceholderStyles;
