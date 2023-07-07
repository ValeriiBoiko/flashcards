import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleHeight, scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';

type TTextInputStyleProps = {
  size: 'sm' | 'md' | 'lg';
  multiline?: boolean;
  numberOfLines?: number;
};

const getTextInputStyles = ({
  colors,
  props,
}: TCreateStylesParams<TTextInputStyleProps>) => {
  const lineHeight = Typography.body2.lineHeight;
  const height =
    props.multiline && props.numberOfLines
      ? lineHeight * props.numberOfLines
      : lineHeight;

  const paddings = {
    sm: scaleHeight(8, 0.5),
    md: scaleHeight(10, 0.5),
    lg: scaleHeight(12, 0.5),
  };

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
      paddingTop: paddings[props.size],
      paddingBottom: paddings[props.size],
      height: height + paddings[props.size] * 2,
    },
    mdInput: {
      paddingTop: paddings[props.size],
      paddingBottom: paddings[props.size],
      height: height + paddings[props.size] * 2,
    },
    lgInput: {
      paddingTop: paddings[props.size],
      paddingBottom: paddings[props.size],
      height: height + paddings[props.size] * 2,
    },
  });
};

export default getTextInputStyles;
