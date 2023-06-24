import React, {useMemo} from 'react';
import {Pressable} from 'react-native';
import {
  BottomSheetBackdropProps,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {BlurView} from '@react-native-community/blur';

const BottomSheetBackdrop = ({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) => {
  const modal = useBottomSheetModal();

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.95],
      Extrapolate.CLAMP,
    ),
  }));

  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  );

  const onPress = () => {
    modal.dismiss();
  };

  return (
    <Animated.View style={containerStyle}>
      <BlurView blurAmount={4} blurType={'dark'} style={{flex: 1}}>
        <Pressable style={{flex: 1}} onPress={onPress} />
      </BlurView>
    </Animated.View>
  );
};

export default React.memo(BottomSheetBackdrop);
