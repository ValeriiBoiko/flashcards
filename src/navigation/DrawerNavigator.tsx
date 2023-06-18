import React from 'react';
import {Routes} from './routes';
import CardsNavigator from '@navigation/CardsNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

type TDraweParamsList = {
  [Routes.CARDS]: undefined;
};

const Drawer = createDrawerNavigator<TDraweParamsList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.CARDS} component={CardsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
