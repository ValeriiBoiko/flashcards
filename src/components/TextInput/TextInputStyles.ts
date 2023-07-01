import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleHeight, scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

const getTextInputStyles = ({colors}: TCreateStylesParams) => {
  return StyleSheet.create({
    input: {
      ...Typography.body2,
      color: colors.text,
      borderRadius: scaleWidth(10),
      justifyContent: 'center',
      paddingHorizontal: scaleWidth(15),
      backgroundColor: colors.card,
    },

    smInput: {
      height: scaleHeight(35, 0.5),
    },
    mdInput: {
      height: scaleHeight(40, 0.5),
    },
    lgInput: {
      height: scaleHeight(45, 0.5),
    },
  });
};

export default getTextInputStyles;
