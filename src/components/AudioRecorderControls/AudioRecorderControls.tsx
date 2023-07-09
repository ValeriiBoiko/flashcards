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
import AudioControlIcon from './AudioControlIcon';

type TAudioRecorderControlsProps = {
  recordingLimit: number;
  extendedView?: boolean;
  recording?: boolean;
  playing?: boolean;
  style?: StyleProp<ViewStyle>;
  onStopRecorder: () => void;
  onStopPlayer: () => void;
  onRecord: () => void;
  onPlay?: () => void;
  onClear?: () => void;
};

const AudioRecorderControls: FC<TAudioRecorderControlsProps> = ({
  recording,
  playing,
  extendedView,
  recordingLimit,
  style,
  onPlay,
  onStopRecorder,
  onStopPlayer,
  onRecord,
  onClear,
}) => {
  const SCALED_PIXEL = scaleFontSize(1);

  const colors = useColors();
  const styles = useStyles(getAudioRecorderControlsStyles);
  const iconSharedValue = useSharedValue(0);
  const extendedViewSharedValue = useSharedValue(0);

  useEffect(() => {
    iconSharedValue.value = withTiming(recording ? 1 : 0, {
      duration: 250,
    });
  }, [recording]);

  useEffect(() => {
    extendedViewSharedValue.value = withTiming(extendedView ? 1 : 0, {
      duration: 250,
    });
  }, [extendedView]);

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
    recording ? onStopRecorder() : onRecord();
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.View style={playAnimatedStyles}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.secondaryButton}
          onPress={playing ? onStopPlayer : onPlay}>
          <AudioControlIcon
            size={24}
            color={colors.background}
            activeIconType={playing ? 'alternative' : 'default'}
            defaultIcon={'play-arrow'}
            alternativeIcon="stop"
          />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.mainButton}
        onPress={onPressMainButton}>
        <AudioControlIcon
          size={24}
          color={colors.brand}
          activeIconType={recording ? 'alternative' : 'default'}
          defaultIcon={'mic'}
          alternativeIcon="stop"
        />

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
