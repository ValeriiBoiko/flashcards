import React, {FC, useEffect} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useStyles from '@hooks/useStyles';
import getAudioRecorderControlsStyles from './AudioRecorderControlsStyles';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {scaleFontSize} from '@theme/layout';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

type TProps = {
  size?: number;
  color?: string;
  activeIconType: 'default' | 'alternative';
  defaultIcon: string;
  alternativeIcon: string;
  style?: StyleProp<ViewStyle>;
};

const AudioControlIcon: FC<TProps> = ({
  size,
  color,
  activeIconType,
  defaultIcon,
  alternativeIcon,
  style,
}) => {
  const styles = useStyles(getAudioRecorderControlsStyles);
  const iconSharedValue = useSharedValue(0);

  useEffect(() => {
    iconSharedValue.value = withTiming(activeIconType === 'default' ? 0 : 1, {
      duration: 200,
    });
  }, [activeIconType]);

  const defaultAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(iconSharedValue.value, [0, 1], [1, 0]),
      transform: [{scale: interpolate(iconSharedValue.value, [0, 1], [1, 0])}],
    };
  }, [iconSharedValue]);

  const alternativeAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: iconSharedValue.value,
      transform: [{scale: iconSharedValue.value}],
    };
  }, [iconSharedValue]);

  return (
    <View style={[styles.iconContainer, style]}>
      <AnimatedIcon
        color={color}
        name={defaultIcon}
        size={scaleFontSize(size)}
        style={defaultAnimatedStyles}
      />
      <AnimatedIcon
        color={color}
        name={alternativeIcon}
        size={scaleFontSize(size)}
        style={[styles.alternativeIcon, alternativeAnimatedStyles]}
      />
    </View>
  );
};

export default React.memo(AudioControlIcon);
