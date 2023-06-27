import {FlatList, ListRenderItemInfo, ScrollView} from 'react-native';
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

type TDeck = {
  category: string;
  name: string;
  decksNumber: number;
  decksCompleted: number;
};

const decks: TDeck[] = [
  {
    category: 'language',
    name: 'Food',
    decksNumber: 16,
    decksCompleted: 7,
  },
  {
    category: 'language',
    name: 'Food',
    decksNumber: 16,
    decksCompleted: 7,
  },
  {
    category: 'language',
    name: 'Food',
    decksNumber: 16,
    decksCompleted: 7,
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

  const renderDeck = useCallback(
    ({item}: ListRenderItemInfo<TDeck>) => (
      <DeckCard
        iconName={categoriesIconMap[item.category]}
        title={'Food'}
        completedCards={3}
        numberOfCards={16}
        style={styles.deck}
      />
    ),
    [categoriesIconMap, styles],
  );

  return (
    <>
      <FlatList
        data={decks}
        numColumns={2}
        style={styles.decks}
        showsVerticalScrollIndicator={false}
        renderItem={renderDeck}
      />

      <AddDeckBottomSheet ref={BottomSheetRef} />
    </>
  );
};

export default Home;
