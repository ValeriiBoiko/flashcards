import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleFontSize, scaleHeight, scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {StyleSheet} from 'react-native';
import {TButtonProps} from './Button';

const getButtonStyles = ({
  colors,
  props,
}: TCreateStylesParams<Required<TButtonProps>>) => {
  const buttonColors: {[key in Required<TButtonProps>['type']]: string} = {
    primary: colors.brand,
    secondary: colors.brand,
    tertiary: colors.text,
  };

  const solidButton = StyleSheet.create({
    container: {
      backgroundColor: buttonColors[props.type],
      borderColor: buttonColors[props.type],
    },
    disabledContainer: {
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
    },
    title: {
      color: colors.background,
    },
    disabledTitle: {
      color: colors.background,
    },
  });

  const outlinedButton = StyleSheet.create({
    container: {
      borderColor: buttonColors[props.type],
    },
    disabledContainer: {
      borderColor: colors.secondary,
    },
    title: {
      color: buttonColors[props.type],
    },
    disabledTitle: {
      color: colors.secondary,
    },
  });

  const clearButton = StyleSheet.create({
    container: {
      borderColor: 'transparent',
    },
    disabledContainer: {
      borderColor: 'transparent',
    },
    title: {
      color: buttonColors[props.type],
    },
    disabledTitle: {
      color: colors.secondary,
    },
  });

  const buttonStyles: {
    [key in Required<TButtonProps>['variant']]:
      | typeof solidButton
      | typeof outlinedButton
      | typeof clearButton;
  } = {
    solid: solidButton,
    outlined: outlinedButton,
    clear: clearButton,
  };

  return StyleSheet.create({
    container: {
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      ...buttonStyles[props.variant].container,
    },

    disabledContainer: {
      ...buttonStyles[props.variant].disabledContainer,
    },

    lgContainer: {
      paddingHorizontal: scaleWidth(22),
      height: scaleHeight(45),
      borderRadius: scaleWidth(12),
    },
    mdContainer: {
      paddingHorizontal: scaleWidth(20),
      height: scaleHeight(40),
      borderRadius: scaleWidth(10),
    },
    smContainer: {
      paddingHorizontal: scaleWidth(16),
      height: scaleHeight(35),
      borderRadius: scaleWidth(8),
    },

    title: {
      ...Typography.button,
      ...buttonStyles[props.variant].title,
      textAlign: 'center',
    },
    titleDisabled: {
      ...buttonStyles[props.variant].disabledTitle,
    },

    icon: {
      ...buttonStyles[props.variant].title,
      paddingLeft: scaleWidth(8),
      fontSize: scaleFontSize(20),
    },
  });
};

export default getButtonStyles;
