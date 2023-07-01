import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleWidth} from '@theme/layout';
import {StyleSheet} from 'react-native';

const getDeckDetailsStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    screenTitleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
      marginRight: scaleWidth(16),
    },
    infoIconWrapper: {
      paddingLeft: scaleWidth(8),
    },
    infoIcon: {
      color: colors.text,
      fontSize: scaleFontSize(20),
    },
  });

export default getDeckDetailsStyles;
