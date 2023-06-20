import React from 'react';
import Home from '@screens/Home/Home';
import {Routes} from '@navigation/routes';
import useColors from '@hooks/useColors';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {scaleHeight} from '@theme/layout';
import NavBackButton from '@components/NavBackButton/NavBackButton';

export type TCardsNavigatorParamList = {
  [Routes.CARDS_HOME]: undefined;
};

const Stack = createStackNavigator<TCardsNavigatorParamList>();

const CardsNavigator = () => {
  const colors = useColors();

  const screenOptions: StackNavigationOptions = {
    title: '',
    headerBackTitle: 'Back',
    headerShadowVisible: false,
    headerLeft: NavBackButton,
    headerStyle: {
      height: scaleHeight(70),
      backgroundColor: colors.background,
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Routes.CARDS_HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default CardsNavigator;
