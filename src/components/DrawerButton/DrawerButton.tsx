import React, {FC} from 'react';
import useStyles from '@hooks/useStyles';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import getDrawerButtonStyles from './DrawerButtonStyles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {scaleWidth} from '@theme/layout';

type TDrawerButtonProps = {
  style?: StyleProp<ViewStyle>;
};

const DrawerButton: FC<TDrawerButtonProps> = ({style}) => {
  const {dispatch} = useNavigation();
  const styles = useStyles(getDrawerButtonStyles);

  const handlePress = () => {
    dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableOpacity
      hitSlop={scaleWidth(20, 0.5)}
      activeOpacity={0.8}
      style={style}
      onPress={handlePress}>
      <View style={[styles.menuLine]} />
      <View style={[styles.menuLine, styles.menuMiddleLine]} />
      <View style={[styles.menuLine]} />
    </TouchableOpacity>
  );
};

export default DrawerButton;
