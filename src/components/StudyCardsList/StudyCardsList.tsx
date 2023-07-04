import React, {FC, useCallback} from 'react';
import StudyCardItem from './StudyCardItem';
import {FlatListProps, ListRenderItemInfo} from 'react-native';
import useStyles from '@hooks/useStyles';
import getStudyCardsListStyles from './StudyCardsListStyles';
import Animated from 'react-native-reanimated';

type TCard = {
  id: string;
  title: string;
  description: string;
  progress: number;
  imageUrl?: string;
};

type TStudyCardsList = Omit<FlatListProps<TCard>, 'renderItem'> & {
  onPressItem?: (id: string) => void;
};

const StudyCardsList: FC<TStudyCardsList> = ({
  contentContainerStyle,
  onPressItem,
  ...props
}) => {
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
    <Animated.FlatList
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      renderItem={renderItem}
      {...props}
    />
  );
};

export default React.memo(StudyCardsList);
