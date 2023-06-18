import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './routes';
import CardsNavigator from './CardsNavigator';

type TDraweParamsList = {
  [Routes.CARDS_HOME]: undefined;
};

const Drawer = createDrawerNavigator<TDraweParamsList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.CARDS_HOME} component={CardsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
