import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize} from '@theme/layout';
import {Font, Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getDeckProgressStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 30,
      paddingBottom: 50,
    },
    cardsNumberValue: {
      ...Typography.headline4,
      fontFamily: Font.POPPINS_SEMIBOLD,
      color: colors.text,
      marginBottom: -10,
      textAlign: 'center',
    },
    cardsNumberLabel: {
      ...Typography.caption,
      color: colors.text,
      textAlign: 'center',
    },

    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    legendItemBadge: {
      marginRight: scaleFontSize(8),
    },
    legendItemValue: {
      ...Typography.caption,
      fontFamily: Font.POPPINS_BOLD,
      color: colors.border,
      marginRight: scaleFontSize(4),
    },
    legendItemLabel: {
      ...Typography.caption,
      color: colors.border,
    },

    deckIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{translateX: -18}, {translateY: -18}],
      color: colors.brand,
      fontSize: scaleFontSize(36),
    },
  });

export default getDeckProgressStyles;
