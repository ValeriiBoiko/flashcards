import React from 'react';
import Home from '@screens/Home/Home';
import {Routes} from '@navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type TCardsNavigatorParamList = {
  [Routes.CARDS_HOME]: undefined;
};

const Stack = createNativeStackNavigator<TCardsNavigatorParamList>();

const CardsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.CARDS_HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default CardsNavigator;
