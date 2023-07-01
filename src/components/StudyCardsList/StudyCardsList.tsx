import React, {FC, useCallback} from 'react';
import StudyCardItem from './StudyCardItem';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';
import useStyles from '@hooks/useStyles';
import getStudyCardsListStyles from './StudyCardsListStyles';

type TCard = {
  id: string;
  title: string;
  description: string;
  progress: number;
  imageUrl?: string;
};

type TStudyCardsList = {
  data: TCard[];
  style?: StyleProp<ViewStyle>;
  onPressItem?: (id: string) => void;
};

const StudyCardsList: FC<TStudyCardsList> = ({data, style, onPressItem}) => {
  const styles = useStyles(getStudyCardsListStyles);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<TCard>) => (
      <StudyCardItem
        key={item.id}
        id={item.id}
        title={item.title}
        learningProgress={item.progress}
        description={item.description}
        imageUrl={item.imageUrl}
        onPress={onPressItem}
      />
    ),
    [],
  );

  return (
    <FlatList
      data={data}
      style={style}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
    />
  );
};

export default React.memo(StudyCardsList);
