import {ScrollView, Text, View} from 'react-native';
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import useStyles from '@hooks/useStyles';

import Button from '@components/Button/Button';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BottomSheet from '@components/BottomSheet/BottomSheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Card from '@components/Card/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useColors from '@hooks/useColors';
import getAddCardBottomSheetStyles from './AddCardBottomSheetStyles';
import TextInput from '@components/TextInput/TextInput';
import AudioTrack from '@components/AudioTrack/AudioTrack';
import AudioRecorderControls from '@components/AudioRecorderControls';

const AddCardBottomSheet: ForwardRefRenderFunction<BottomSheetModal, any> = (
  {},
  forwardedRef,
) => {
  const RECORDING_LIMIT = 5000;
  const colors = useColors();
  const styles = useStyles(getAddCardBottomSheetStyles);

  const [term, setTerm] = useState('');
  const [answer, setAnswer] = useState('');

  const recordingLimit = useRef<null | number>(null);
  const trackSharedValue = useSharedValue(0);

  const [recording, setRecording] = useState(false);
  const [extendedView, setExtendedView] = useState(false);

  useEffect(() => {
    const toValue = !recording && extendedView ? 1 : 0;

    trackSharedValue.value = withTiming(toValue, {
      duration: 200,
    });
  }, [recording, extendedView]);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(trackSharedValue.value, [0, 1], [10, 0])},
        {scaleY: trackSharedValue.value},
      ],
    };
  }, []);

  const onRecord = useCallback(() => {
    setRecording(true);
    setExtendedView(false);

    if (recordingLimit.current) {
      clearTimeout(recordingLimit.current);
    }

    recordingLimit.current = setTimeout(() => {
      setRecording(false);
      setExtendedView(true);
    }, RECORDING_LIMIT);
  }, [recordingLimit.current, RECORDING_LIMIT]);

  const onStop = useCallback(() => {
    if (recordingLimit.current) {
      clearTimeout(recordingLimit.current);
    }

    setRecording(false);
    setExtendedView(true);
  }, [recordingLimit.current]);

  const onClearRecording = useCallback(() => {}, []);

  const onPlay = useCallback(() => {}, []);

  return (
    <BottomSheet ref={forwardedRef} title={'Add Deck'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bottomSheet}>
        <Card style={{alignItems: 'stretch', paddingBottom: 0}}>
          <View style={styles.imagePicker}>
            <Icon name={'image'} style={styles.imagePickerIcon} />
            <Text style={styles.imagePickerLabel}>Add Media</Text>
          </View>

          <TextInput
            value={term}
            maxLength={256}
            onChangeText={setTerm}
            placeholderTextColor={colors.border}
            placeholder="Type a term"
            style={styles.input}
          />
          <TextInput
            multiline
            numberOfLines={2}
            value={answer}
            maxLength={256}
            onChangeText={setAnswer}
            placeholderTextColor={colors.border}
            placeholder="Type the answer"
            style={styles.input}
          />

          <View style={styles.audioContainer}>
            <AudioRecorderControls
              extendedView={extendedView}
              recordingLimit={RECORDING_LIMIT}
              recording={recording}
              onPlay={onPlay}
              onClear={onClearRecording}
              onRecord={onRecord}
              onStop={onStop}
            />

            <Animated.View
              style={[styles.audioTrackWrapper, trackAnimatedStyle]}>
              <AudioTrack progress={0} style={{height: 20}} />
            </Animated.View>
          </View>
        </Card>
        <Button size={'lg'} title="Add Card" style={styles.saveButton} />
      </ScrollView>
    </BottomSheet>
  );
};

export default forwardRef(AddCardBottomSheet);
