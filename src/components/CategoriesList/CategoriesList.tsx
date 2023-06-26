import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';
import React, {FC, useCallback} from 'react';
import useStyles from '@hooks/useStyles';
import getCategoriesListStyles from './CategoriesListStyles';
import CategoryItem from './CategoryItem';

type TCategoriesListProps = {
  items: {
    id: string;
    icon: string;
    name: string;
  }[];
  style?: StyleProp<ViewStyle>;
  onPressItem?: (id: string) => void;
};

const CategoriesList: FC<TCategoriesListProps> = ({
  items,
  style,
  onPressItem,
}) => {
  const styles = useStyles(getCategoriesListStyles);

  const renderItem = useCallback(
    ({
      item,
    }: ListRenderItemInfo<{
      id: string;
      icon: string;
      name: string;
    }>) => (
      <CategoryItem
        key={item.icon}
        id={item.id}
        label={item.name}
        iconName={item.icon}
        onPress={onPressItem}
      />
    ),
    [styles],
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      style={[styles.listStyle, style]}
      contentContainerStyle={styles.listContentStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoriesList;
