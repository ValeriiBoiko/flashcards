import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleHeight, scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getAddDeckBottomSheetStyles = ({colors, insets}: TCreateStylesParams) =>
  StyleSheet.create({
    bottomSheet: {
      paddingHorizontal: scaleWidth(20),
      paddingBottom: insets.bottom ? insets.bottom : scaleHeight(20, 0.5),
    },

    imagePicker: {
      borderRadius: scaleWidth(10),
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: scaleHeight(20, 0.5),
      aspectRatio: 1.8,
      width: '100%',
    },
    imagePickerIcon: {
      color: colors.border,
      opacity: 0.5,
      fontSize: scaleFontSize(36),
    },
    imagePickerLabel: {
      ...Typography.subtitle1,
      marginTop: scaleHeight(4, 0.5),
      color: colors.border,
      opacity: 0.5,
    },
    input: {
      ...Typography.body2,
      backgroundColor: colors.background,
      color: colors.text,
      marginBottom: scaleHeight(20, 0.5),
    },

    audioContainer: {
      alignItems: 'center',
      marginTop: scaleHeight(10, 0.5),
    },
    audioTrackWrapper: {
      width: '100%',
      marginTop: scaleHeight(20, 0.5),
    },
    audioTrack: {
      height: scaleHeight(20, 0.5),
    },

    saveButton: {
      flex: 1,
      marginTop: scaleHeight(20, 0.5),
    },
  });

export default getAddDeckBottomSheetStyles;
