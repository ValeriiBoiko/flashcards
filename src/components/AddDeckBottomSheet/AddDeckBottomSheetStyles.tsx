import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleHeight, scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getAddDeckBottomSheetStyles = ({colors, insets}: TCreateStylesParams) =>
  StyleSheet.create({
    bottomSheet: {
      flexDirection: 'column-reverse',
      paddingBottom: insets.bottom ? insets.bottom : scaleHeight(20, 0.5),
    },

    categoryContainer: {
      aspectRatio: 1,
      width: scaleWidth(75),
      borderRadius: scaleWidth(75),
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    editContainer: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      aspectRatio: 1,
      width: scaleWidth(20),
      borderRadius: scaleWidth(20),
      backgroundColor: colors.text,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.75,
    },
    editIcon: {
      color: colors.card,
      fontSize: scaleFontSize(11),
    },

    categoriesListContainer: {
      top: 0,
      left: -scaleWidth(15),
      right: -scaleWidth(15),
      position: 'absolute',
      paddingHorizontal: scaleWidth(15),
      paddingBottom: scaleHeight(15, 0.5),
      backgroundColor: colors.card,
      borderRadius: scaleWidth(12),
    },

    deckNameInput: {
      ...Typography.subtitle1,
      backgroundColor: colors.background,
      textAlign: 'center',
      color: colors.text,

      height: scaleHeight(45, 0.5),
      borderRadius: scaleWidth(10),
      justifyContent: 'center',
      paddingHorizontal: scaleWidth(15),
    },

    shareContainer: {
      height: scaleHeight(45, 0.5),
      marginTop: scaleHeight(20, 0.5),
      borderRadius: scaleWidth(10),
      flexDirection: 'row',
      backgroundColor: colors.card,
    },
    shareLink: {
      flex: 1,
      alignSelf: 'center',
      color: colors.border,
      paddingHorizontal: scaleWidth(15),
    },

    saveButton: {
      marginTop: scaleHeight(20, 0.5),
    },
  });

export default getAddDeckBottomSheetStyles;
