import React, {FC, useEffect} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useStyles from '@hooks/useStyles';
import getAudioRecorderControlsStyles from './AudioRecorderControlsStyles';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {scaleFontSize, scaleWidth} from '@theme/layout';
import DonutChart from '@components/DonutChart/DonutChart';
import useColors from '@hooks/useColors';

type TAudioRecorderControlsProps = {
  recordingLimit: number;
  extendedView?: boolean;
  recording: boolean;
  style?: StyleProp<ViewStyle>;
  onStop: () => void;
  onRecord: () => void;
  onPlay?: () => void;
  onClear?: () => void;
};

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const AudioRecorderControls: FC<TAudioRecorderControlsProps> = ({
  recording,
  extendedView,
  recordingLimit,
  style,
  onPlay,
  onStop,
  onRecord,
  onClear,
}) => {
  const SCALED_PIXEL = scaleFontSize(1);
  const ICON_SIZE = scaleFontSize(24);

  const colors = useColors();
  const styles = useStyles(getAudioRecorderControlsStyles);
  const iconSharedValue = useSharedValue(0);
  const extendedViewSharedValue = useSharedValue(0);

  useEffect(() => {
    iconSharedValue.value = withTiming(recording ? 1 : 0, {
      duration: 200,
    });
  }, [recording]);

  useEffect(() => {
    extendedViewSharedValue.value = withTiming(extendedView ? 1 : 0, {
      duration: 200,
    });
  }, [extendedView]);

  const stopAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(iconSharedValue.value, [0, 1], [1, 0]),
      transform: [
        {translateX: -ICON_SIZE / 2},
        {translateY: -ICON_SIZE / 2},
        {scale: interpolate(iconSharedValue.value, [0, 1], [1, 0])},
      ],
    };
  }, [iconSharedValue, ICON_SIZE]);

  const micAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: iconSharedValue.value,
      transform: [
        {translateX: -ICON_SIZE / 2},
        {translateY: -ICON_SIZE / 2},
        {scale: iconSharedValue.value},
      ],
    };
  }, [iconSharedValue, ICON_SIZE]);

  const playAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: extendedViewSharedValue.value,
      transform: [
        {
          translateX: interpolate(
            extendedViewSharedValue.value,
            [1, 0],
            [0, SCALED_PIXEL * 50],
          ),
        },
        {scale: extendedViewSharedValue.value},
      ],
    };
  }, [extendedViewSharedValue]);

  const clearAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: extendedViewSharedValue.value,
      transform: [
        {
          translateX: interpolate(
            extendedViewSharedValue.value,
            [1, 0],
            [0, -SCALED_PIXEL * 50],
          ),
        },
        {scale: extendedViewSharedValue.value},
      ],
    };
  }, [extendedViewSharedValue, SCALED_PIXEL]);

  const progressData = [
    {
      value: 100,
      color: colors.brand,
    },
  ];

  const onPressMainButton = () => {
    recording ? onStop() : onRecord();
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.View style={playAnimatedStyles}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.secondaryButton}
          onPress={onPlay}>
          <Icon name="play-arrow" style={styles.secondaryIcon} />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.mainButton}
        onPress={onPressMainButton}>
        <AnimatedIcon name={'mic'} style={[styles.icon, stopAnimatedStyles]} />
        <AnimatedIcon name={'stop'} style={[styles.icon, micAnimatedStyles]} />

        {recording && (
          <DonutChart
            data={progressData}
            size={scaleWidth(60)}
            thickness={scaleWidth(3)}
            style={styles.progress}
            animationConfig={{
              duration: recordingLimit,
              easing: Easing.linear,
            }}
          />
        )}
      </TouchableOpacity>

      <Animated.View style={clearAnimatedStyles}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.secondaryButton}
          onPress={onClear}>
          <Icon name="close" style={styles.secondaryIcon} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default React.memo(AudioRecorderControls);
