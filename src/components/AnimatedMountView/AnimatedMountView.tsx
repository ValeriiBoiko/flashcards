import React, {FC, useEffect} from 'react';
import {InteractionManager, StyleProp, ViewStyle} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

type TAnimatedMountView = {
  delay?: number;
  duration?: number;
  runAfterInterraction?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode | React.ReactNode[];
};

const AnimatedMountView: FC<TAnimatedMountView> = ({
  delay = 0,
  duration = 1000,
  runAfterInterraction = false,
  style,
  children,
}) => {
  const sharedValue = useSharedValue(0);

  useEffect(() => {
    const runAnimation = () => {
      sharedValue.value = withDelay(
        delay,
        withTiming(1, {
          duration: duration,
        }),
      );
    };

    if (runAfterInterraction) {
      InteractionManager.runAfterInteractions(runAnimation);
    } else {
      runAnimation();
    }
  }, []);

  const animStyles = useAnimatedStyle(
    () => ({
      opacity: sharedValue.value,
      transform: [
        {
          translateY: interpolate(
            sharedValue.value,
            [0, 1],
            [30, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    }),
    [],
  );

  return <Animated.View style={[style, animStyles]}>{children}</Animated.View>;
};

export default AnimatedMountView;
