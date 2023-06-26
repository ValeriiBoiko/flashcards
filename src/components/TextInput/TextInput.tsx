import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import React, {ForwardRefRenderFunction, forwardRef} from 'react';
import useStyles from '@hooks/useStyles';
import getTextInputStyles from './TextInputStyles';
import useColors from '@hooks/useColors';

const TextInput: ForwardRefRenderFunction<RNTextInput, TextInputProps> = (
  {style, ...props},
  forwardedRef,
) => {
  const colors = useColors();
  const styles = useStyles(getTextInputStyles);

  return (
    <RNTextInput
      ref={forwardedRef}
      placeholderTextColor={colors.secondary}
      style={[styles.input, style]}
      {...props}
    />
  );
};

export default React.memo(forwardRef(TextInput));
