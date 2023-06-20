import React from 'react';
import {Routes} from './routes';
import CardsNavigator from '@navigation/CardsNavigator';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import DrawerContent from '@components/DrawerContent/DrawerContent';

type TDraweParamsList = {
  [Routes.CARDS]: undefined;
};

const Drawer = createDrawerNavigator<TDraweParamsList>();

const DrawerNavigator = () => {
  const screenOptions: DrawerNavigationOptions = {
    drawerType: 'front',
    headerShown: false,
    overlayColor: 'transparent',
    drawerStyle: {
      width: '100%',
      backgroundColor: 'transparent',
    },
  };

  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={Routes.CARDS} component={CardsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
