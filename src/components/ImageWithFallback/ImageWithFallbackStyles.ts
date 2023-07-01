import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';

const getImageWithFallbackStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    iconWrapper: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      opacity: 0.5,
      color: colors.border,
    },
  });

export default getImageWithFallbackStyles;
