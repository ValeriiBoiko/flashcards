import React from 'react';
import RootNavigator from '@navigation/RootNavigator';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <RootNavigator />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
