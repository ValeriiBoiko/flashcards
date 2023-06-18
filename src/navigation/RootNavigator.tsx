import React from 'react';
import DrawerNavigator from '@navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
