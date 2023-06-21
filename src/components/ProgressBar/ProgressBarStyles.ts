import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleHeight} from '@theme/layout';
import {StyleSheet} from 'react-native';
import {TProgressBarProps} from './ProgressBar';

const getProgressBarStyles = ({
  colors,
  props,
}: TCreateStylesParams<TProgressBarProps>) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: scaleHeight(props.height, 0.5),
      borderRadius: scaleHeight(props.height, 0.5),
      backgroundColor: colors.background,
      overflow: 'hidden',
    },
    progress: {
      height: '100%',
      width: `${props.value}%`,
      borderRadius: scaleHeight(props.height, 0.5),
      backgroundColor: colors.brand,
    },
  });

export default getProgressBarStyles;
