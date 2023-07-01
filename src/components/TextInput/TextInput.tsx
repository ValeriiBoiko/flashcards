import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import React, {ForwardRefRenderFunction, forwardRef, useMemo} from 'react';
import useStyles from '@hooks/useStyles';
import getTextInputStyles from './TextInputStyles';
import useColors from '@hooks/useColors';

export type TTextInputProps = TextInputProps & {
  size?: 'sm' | 'md' | 'lg';
};

const TextInput: ForwardRefRenderFunction<RNTextInput, TTextInputProps> = (
  {style, size = 'md', ...props},
  forwardedRef,
) => {
  const colors = useColors();
  const styles = useStyles(getTextInputStyles);

  return (
    <RNTextInput
      ref={forwardedRef}
      placeholderTextColor={colors.secondary}
      style={[styles.input, styles[`${size}Input`], style]}
      {...props}
    />
  );
};

export default React.memo(forwardRef(TextInput));
