import { View, Text, Image } from 'react-native';
import React, { Fragment } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import IndexLayout from './app/IndexLayout';

import * as Font from 'expo-font';
import fonts from './app/assets/font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor} from './app/store/storage';
import { PersistGate } from 'redux-persist/integration/react';


// import fonts from './app/assets/font'

function App() {
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync(fonts);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);
  return (
    <Fragment>
      <Provider store={store}>
          <IndexLayout />
      </Provider>
    </Fragment>
  );
}

export default App;
