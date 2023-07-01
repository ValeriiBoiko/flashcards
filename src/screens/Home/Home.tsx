import {FlatList, ListRenderItemInfo, View} from 'react-native';
import React, {FC, useCallback, useLayoutEffect, useRef} from 'react';
import useStyles from '@hooks/useStyles';
import DrawerButton from '@components/DrawerButton/DrawerButton';
import {TCardsNavigatorParamList} from '@navigation/CardsNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import getHomeStyles from './HomeStyles';
import Button from '@components/Button/Button';
import DeckCard from '@components/DeckCard/DeckCard';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import AddDeckBottomSheet from '@components/AddDeckBottomSheet/AddDeckBottomSheet';
import {Routes} from '@navigation/routes';
import {categoriesIconMap} from 'src/const/categories';
import EmptyScreenPlaceholder from '@components/EmptyScreenPlaceholder';

type TDeck = {
  id: string;
  category: string;
  name: string;
  cardsTotal: number;
  cardsCompleted: number;
};

const decks: TDeck[] = [
  {
    id: '1',
    category: 'language_learning',
    name: 'English',
    cardsTotal: 16,
    cardsCompleted: 7,
  },
  {
    id: '2',
    category: 'miscellaneous',
    name: 'Mescellaneous',
    cardsTotal: 16,
    cardsCompleted: 7,
  },
  {
    id: '3',
    category: 'test_preparation',
    name: 'Test Preparation',
    cardsTotal: 16,
    cardsCompleted: 7,
  },
];

type THomeProps = StackScreenProps<TCardsNavigatorParamList, Routes.CARDS_HOME>;

const Home: FC<THomeProps> = ({navigation}) => {
  const styles = useStyles(getHomeStyles);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <DrawerButton style={styles.menu} />,
      headerRight: () => (
        <Button
          size="sm"
          title="ADD DECK"
          style={styles.addDeckButton}
          onPress={() => {
            handlePresentModalPress();
          }}
        />
      ),
    });
  }, [styles.menu, styles.addDeckButton]);

  const BottomSheetRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    BottomSheetRef.current?.present();
  }, []);

  const onPressDeckCard = useCallback(
    (id: string) => {
      //
    },
    [navigation],
  );

  const renderDeck = useCallback(
    ({item, index}: ListRenderItemInfo<TDeck>) => (
      <DeckCard
        key={item.id}
        id={item.id}
        animationDelay={200 * index}
        iconName={categoriesIconMap[item.category]}
        title={item.name}
        completedCards={item.cardsCompleted}
        numberOfCards={item.cardsTotal}
        style={styles.deck}
        onPress={onPressDeckCard}
      />
    ),
    [categoriesIconMap, styles],
  );

  const listEmptyComponent = useCallback(
    () => <EmptyScreenPlaceholder title="There is no any deck" />,
    [],
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={decks}
        numColumns={2}
        style={styles.decks}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.decksContentContainer}
        renderItem={renderDeck}
        ListEmptyComponent={listEmptyComponent}
      />

      <AddDeckBottomSheet ref={BottomSheetRef} />
    </View>
  );
};

export default Home;
