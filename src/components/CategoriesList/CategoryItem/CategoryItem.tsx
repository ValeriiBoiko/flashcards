import React, {FC} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import useStyles from '@hooks/useStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getCategoryItemStyles from './CategoryItemStyles';

type TCategoryItemProps = {
  id: string;
  label: string;
  iconName: string;
  onPress?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};

const CategoryItem: FC<TCategoryItemProps> = ({
  id,
  label,
  iconName,
  style,
  onPress,
}) => {
  const styles = useStyles(getCategoryItemStyles);

  const handlePress = () => {
    onPress?.(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={handlePress}>
      <View style={styles.leftIconWrapper}>
        <Icon name={iconName} style={styles.leftIcon} />
      </View>

      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>

      <Icon name={'chevron-right'} style={styles.rightIcon} />
    </TouchableOpacity>
  );
};

export default React.memo(CategoryItem);
