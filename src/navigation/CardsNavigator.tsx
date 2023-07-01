import React from 'react';
import Home from '@screens/Home/Home';
import {Routes} from '@navigation/routes';
import useColors from '@hooks/useColors';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {scaleHeight} from '@theme/layout';
import DeckDetails from '@screens/DeckDetails/DeckDetails';
import NavBackButton from '@components/NavBackButton/NavBackButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type TCardsNavigatorParamList = {
  [Routes.CARDS_HOME]: undefined;
  [Routes.CARDS_DECK_DETAILS]: {
    deckId: string;
  };
};

const Stack = createStackNavigator<TCardsNavigatorParamList>();

const CardsNavigator = () => {
  const insets = useSafeAreaInsets();
  const colors = useColors();

  const screenOptions: StackNavigationOptions = {
    title: '',
    headerBackTitle: 'Back',
    headerShadowVisible: false,
    headerLeft: NavBackButton,
    headerStyle: {
      height: scaleHeight(60, 0.5) + insets.top,
      backgroundColor: colors.background,
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Routes.CARDS_HOME} component={Home} />
      <Stack.Screen name={Routes.CARDS_DECK_DETAILS} component={DeckDetails} />
    </Stack.Navigator>
  );
};

export default CardsNavigator;
