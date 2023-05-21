import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './services/routes';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const image = { uri: 'https://reactjs.org/logo-og.png' };

const AppNavigator = Routes;

function IndexLayout() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 495,
  },
  imageProfile: {
    position: 'absolute',
    alignItems: 'center',
    top: 80,
    left: 137,
  },
});

export default IndexLayout;
