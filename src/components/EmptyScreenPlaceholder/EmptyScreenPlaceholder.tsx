import {StyleProp, Text, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import useStyles from '@hooks/useStyles';
import getEmptyScreenPlaceholderStyles from './EmptyScreenPlaceholderStyles';

type TEmptyScreenPlaceholderProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

const EmptyScreenPlaceholder: FC<TEmptyScreenPlaceholderProps> = ({
  title,
  style,
}) => {
  const styles = useStyles(getEmptyScreenPlaceholderStyles);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default EmptyScreenPlaceholder;
