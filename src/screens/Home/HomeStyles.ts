import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';
import {TCreateStylesParams} from '@hooks/useStyles';

const getHomeStyles = ({insets}: TCreateStylesParams) =>
  StyleSheet.create({
    menu: {
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: scaleWidth(20),
    },
    addDeckButton: {
      marginRight: scaleWidth(20),
    },
    decks: {
      flex: 1,
      marginTop: scaleHeight(30, 0.5),
      paddingHorizontal: scaleWidth(10),
    },
    decksContentContainer: {
      flexGrow: 1,
      paddingBottom: insets.bottom,
    },
    deck: {
      width: '50%',
      paddingHorizontal: scaleWidth(10),
      marginBottom: scaleHeight(20, 0.5),
    },
  });

export default getHomeStyles;
