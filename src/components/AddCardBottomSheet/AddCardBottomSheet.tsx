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
  Easing,
  interpolate,
  runOnJS,
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
import useAudioRecorder from '@hooks/useAudioRecorder';

const AddCardBottomSheet: ForwardRefRenderFunction<BottomSheetModal, any> = (
  {},
  forwardedRef,
) => {
  const RECORDING_LIMIT = 5000;

  const colors = useColors();
  const recorder = useAudioRecorder();
  const trackSharedValue = useSharedValue(0);
  const playingProgress = useSharedValue(0);
  const recordingLimit = useRef<null | number>(null);
  const styles = useStyles(getAddCardBottomSheetStyles);

  const [term, setTerm] = useState('');
  const [answer, setAnswer] = useState('');

  const [isPlaying, setPlayingFlag] = useState(false);
  const [isRecording, setRecordingFlag] = useState(false);
  const [extendedView, setExtendedView] = useState(false);

  useEffect(() => {
    const toValue = !isRecording && extendedView ? 1 : 0;

    trackSharedValue.value = withTiming(toValue, {
      duration: 200,
    });
  }, [isRecording, extendedView]);

  useEffect(() => {
    if (isPlaying) {
      playingProgress.value = withTiming(
        100,
        {
          duration: recorder.duration,
          easing: Easing.linear,
        },
        () => {
          playingProgress.value = 0;
          runOnJS(setPlayingFlag)(false);
        },
      );
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isRecording) {
      recordingLimit.current = setTimeout(onStopRecorder, RECORDING_LIMIT);
    } else if (recordingLimit.current) {
      clearTimeout(recordingLimit.current);
    }
  }, [isRecording]);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(trackSharedValue.value, [0, 1], [10, 0])},
        {scaleY: trackSharedValue.value},
      ],
    };
  }, []);

  const onRecord = useCallback(async () => {
    setRecordingFlag(true);
    setExtendedView(false);

    await recorder.startRecorder();
  }, [recorder.startRecorder, RECORDING_LIMIT]);

  const onStopRecorder = useCallback(async () => {
    setRecordingFlag(false);
    setExtendedView(true);

    playingProgress.value = 0;

    await recorder.stopRecorder();
  }, [recorder.stopRecorder]);

  const onStopPlayer = useCallback(async () => {
    playingProgress.value = 0;
    setPlayingFlag(false);

    await recorder.stopPlayer();
  }, [recorder.stopRecorder]);

  const onPlay = useCallback(async () => {
    setPlayingFlag(true);

    await recorder.playRecording();
  }, [recorder.playRecording]);

  const onClearAudio = useCallback(async () => {
    setRecordingFlag(false);
    setExtendedView(false);

    await recorder.deleteRecording();
  }, [recorder.deleteRecording]);

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
              recording={isRecording}
              playing={isPlaying}
              onPlay={onPlay}
              onClear={onClearAudio}
              onRecord={onRecord}
              onStopRecorder={onStopRecorder}
              onStopPlayer={onStopPlayer}
            />

            <Animated.View
              style={[styles.audioTrackWrapper, trackAnimatedStyle]}>
              <AudioTrack
                progress={playingProgress}
                style={styles.audioTrack}
              />
            </Animated.View>
          </View>
        </Card>
        <Button size={'lg'} title="Add Card" style={styles.saveButton} />
      </ScrollView>
    </BottomSheet>
  );
};

export default forwardRef(AddCardBottomSheet);
