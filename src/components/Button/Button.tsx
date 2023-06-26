import React, {FC, useMemo} from 'react';
import useStyles from '@hooks/useStyles';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import getButtonStyles from './ButtonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type TButtonProps = {
  title?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'solid' | 'outlined' | 'clear';
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
  disabled?: boolean;
  rightIcon?: string | React.ReactNode;
  onPress?: () => void;
};

const Button: FC<TButtonProps> = ({
  title = '',
  size = 'md',
  disabled = false,
  type = 'primary',
  variant = 'solid',
  rightIcon,
  style,
  onPress,
}) => {
  const memoStyles = useMemo(
    () => ({
      type,
      title,
      size,
      disabled,
      variant,
      style,
      onPress,
    }),
    [type, title, size, disabled, variant, style, onPress],
  );
  const styles = useStyles(getButtonStyles, memoStyles);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        styles[`${size}Container`],
        disabled && styles.disabledContainer,
        style,
      ]}
      onPress={onPress}>
      <Text style={[styles.title, disabled && styles.titleDisabled]}>
        {title}
      </Text>
      {rightIcon && typeof rightIcon === 'string' ? (
        <Icon name={rightIcon} style={styles.icon} />
      ) : (
        rightIcon
      )}
    </TouchableOpacity>
  );
};

export default Button;
