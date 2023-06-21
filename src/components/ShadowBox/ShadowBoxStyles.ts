import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet, ViewStyle} from 'react-native';

const getShadowBoxStyles = ({
  props,
}: TCreateStylesParams<{
  style: ViewStyle;
}>) =>
  StyleSheet.create({
    shadowBox: {
      height: '100%',
      width: '100%',
      borderRadius: props.style.borderRadius,
    },
  });

export default getShadowBoxStyles;
