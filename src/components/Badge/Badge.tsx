import useStyles from '@hooks/useStyles';
import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import getBadgeStyles from './BadgeStyles';

export type TBadgeProps = {
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
};

const Badge: FC<TBadgeProps> = props => {
  const styles = useStyles(getBadgeStyles, props);

  return <View style={[styles.container, props.style]} />;
};

export default Badge;
