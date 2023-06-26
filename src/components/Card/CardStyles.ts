import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {StyleSheet} from 'react-native';

const getCardStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    card: {
      alignItems: 'center',
      padding: scaleWidth(15),
      backgroundColor: colors.card,
      borderRadius: scaleWidth(12, 0.5),
    },
  });

export default getCardStyles;
