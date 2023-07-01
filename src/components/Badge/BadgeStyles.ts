import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {StyleSheet} from 'react-native';
import {TBadgeProps} from './Badge';

const getBadgeStyles = ({props}: TCreateStylesParams<TBadgeProps>) =>
  StyleSheet.create({
    container: {
      width: scaleWidth(props.size),
      aspectRatio: 1,
      borderRadius: scaleWidth(props.size),
      backgroundColor: props.color,
    },
  });

export default getBadgeStyles;
