import {scaleHeight} from '@theme/layout';
import {StyleSheet} from 'react-native';

const getStudyCardsListStyles = () =>
  StyleSheet.create({
    contentContainer: {
      rowGap: scaleHeight(20, 0.5),
    },
  });

export default getStudyCardsListStyles;
