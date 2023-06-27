import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';
import {TCreateStylesParams} from '@hooks/useStyles';

const getHomeStyles = (data: TCreateStylesParams) =>
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
      marginTop: scaleHeight(30, 0.5),
      paddingHorizontal: scaleWidth(10),
    },
    deck: {
      width: '50%',
      paddingHorizontal: scaleWidth(10),
      marginBottom: scaleHeight(20, 0.5),
    },
  });

export default getHomeStyles;
