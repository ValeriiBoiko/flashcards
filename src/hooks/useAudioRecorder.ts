import RNFS from 'react-native-fs';
import {useCallback, useEffect, useRef, useState} from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const useAudioRecorder = () => {
  const recorder = useRef(new AudioRecorderPlayer());
  const liveDuration = useRef(0);
  const [duration, setDuration] = useState(0);
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
    recorder.current.setSubscriptionDuration(0.1);
  }, []);

  const startRecorder = useCallback(async () => {
    await recorder.current.startRecorder();

    recorder.current.addRecordBackListener(e => {
      liveDuration.current = e.currentPosition;
    });
  }, []);

  const stopRecorder = useCallback(async () => {
    const path = await recorder.current.stopRecorder();
    recorder.current.removeRecordBackListener();

    setDuration(liveDuration.current);
    setFilePath(path);
  }, []);

  const stopPlayer = useCallback(async () => {
    await recorder.current.stopPlayer();
  }, []);

  const playRecording = useCallback(async () => {
    await recorder.current.startPlayer();
  }, []);

  const deleteRecording = useCallback(async () => {
    if (filePath) {
      const fileExists = await RNFS.exists(filePath);

      if (fileExists) {
        await RNFS.unlink(filePath);
      }
    }

    setDuration(0);
    setFilePath('');
    liveDuration.current = 0;
  }, [filePath]);

  return {
    filePath,
    duration,
    stopPlayer,
    stopRecorder,
    startRecorder,
    playRecording,
    deleteRecording,
  };
};

export default useAudioRecorder;
