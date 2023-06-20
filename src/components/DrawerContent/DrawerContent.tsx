import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';
import useStyles from '@hooks/useStyles';
import getDrawerContentStyles from './DrawerContentStyles';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const DrawerContent: FC<DrawerContentComponentProps> = props => {
  const progress = useDrawerProgress();
  const styles = useStyles(getDrawerContentStyles);

  const onPressOverlay = () => {
    props.navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const blurStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(progress.value, [0, 0.5, 1], [0, 0, 0.95]),
    }),
    [],
  );

  const overflowStyle = useAnimatedStyle(
    () => ({
      overflow: progress.value > 0.1 ? 'visible' : 'hidden',
    }),
    [],
  );

  return (
    <Animated.View style={[styles.container, overflowStyle]}>
      <Pressable style={styles.overlay} onPress={onPressOverlay}>
        <AnimatedBlurView
          blurAmount={4}
          blurType={'dark'}
          style={[styles.blurContainer, blurStyle]}
        />
      </Pressable>

      <View style={styles.content} />
    </Animated.View>
  );
};

export default DrawerContent;
