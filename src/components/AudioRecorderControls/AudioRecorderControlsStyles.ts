import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleHeight, scaleWidth} from '@theme/layout';
import {StyleSheet} from 'react-native';
import {hexToRgb} from 'src/utils/colors';

const getAudioRecorderControlsStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    secondaryButton: {
      width: scaleWidth(40, 0.5),
      aspectRatio: 1,
      borderRadius: scaleWidth(40, 0.5),
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: scaleWidth(10),
    },
    secondaryIcon: {
      color: colors.card,
      fontSize: scaleFontSize(24),
    },

    mainButton: {
      width: scaleWidth(60, 0.5),
      aspectRatio: 1,
      borderRadius: scaleWidth(60, 0.5),
      backgroundColor: hexToRgb(colors.brand, 0.1),
      alignItems: 'center',
      justifyContent: 'center',
    },

    progress: {
      position: 'absolute',
    },

    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alternativeIcon: {
      position: 'absolute',
    },
  });

export default getAudioRecorderControlsStyles;
