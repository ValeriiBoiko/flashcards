import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleHeight} from '@theme/layout';
import {Font, Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getDeckProgressStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardsNumberValue: {
      ...Typography.headline4,
      fontFamily: Font.POPPINS_SEMIBOLD,
      color: colors.text,
      marginBottom: scaleHeight(-10, 0.5),
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

    chartWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    deckIcon: {
      position: 'absolute',
      color: colors.brand,
      fontSize: scaleFontSize(36),
    },
  });

export default getDeckProgressStyles;
