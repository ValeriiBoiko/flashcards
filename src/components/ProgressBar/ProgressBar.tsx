import useStyles from '@hooks/useStyles';
import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import getProgressBarStyles from './ProgressBarStyles';

export type TProgressBarProps = {
  height?: number;
  value: number;
  style?: StyleProp<ViewStyle>;
};

const ProgressBar: FC<TProgressBarProps> = props => {
  const styles = useStyles(getProgressBarStyles, props);

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.progress} />
    </View>
  );
};

ProgressBar.defaultProps = {
  height: 10,
};

export default React.memo(ProgressBar);
