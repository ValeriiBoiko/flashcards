import {TextInputProps} from 'react-native';
import React, {
  ComponentType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  RefAttributes,
  forwardRef,
  useMemo,
} from 'react';
import useStyles from '@hooks/useStyles';
import getTextInputStyles from './TextInputStyles';
import useColors from '@hooks/useColors';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {NativeViewGestureHandlerProps} from 'react-native-gesture-handler';

export type TTextInputProps = TextInputProps & {
  size?: 'sm' | 'md' | 'lg';
};

const TextInput: ForwardRefRenderFunction<
  ForwardRefExoticComponent<
    TextInputProps &
      NativeViewGestureHandlerProps &
      RefAttributes<ComponentType<any>>
  >,
  TTextInputProps
> = (
  {style, size = 'md', multiline, numberOfLines, ...props},
  forwardedRef,
) => {
  const styleProps = useMemo(
    () => ({multiline, numberOfLines, size}),
    [multiline, numberOfLines, size],
  );
  const colors = useColors();
  const styles = useStyles(getTextInputStyles, styleProps);

  return (
    <BottomSheetTextInput
      ref={forwardedRef}
      placeholderTextColor={colors.secondary}
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={[styles.input, styles[`${size}Input`], style]}
      {...props}
    />
  );
};

export default React.memo(forwardRef(TextInput));
