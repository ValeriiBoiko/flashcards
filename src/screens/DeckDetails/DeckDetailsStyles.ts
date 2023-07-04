import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleHeight, scaleWidth} from '@theme/layout';
import {StyleSheet} from 'react-native';

const getDeckDetailsStyles = ({colors, insets}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: scaleWidth(20),
      flexDirection: 'column-reverse',
    },
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

    buttonsRow: {
      flexDirection: 'row',
    },
    startButton: {
      flex: 1,
      marginRight: scaleWidth(15),
    },
    cardsList: {
      flex: 1,
      marginTop: scaleHeight(20, 0.5),
      paddingTop: scaleHeight(70, 0.5),
    },
    cardsListContentContainer: {
      paddingBottom:
        (insets.bottom || scaleHeight(20, 0.5)) + scaleHeight(70, 0.5),
    },
  });

export default getDeckDetailsStyles;
