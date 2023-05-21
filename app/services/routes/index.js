import { View, TouchableOpacity } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen, Login, MAIN } from '../../screens/index';
import Register from '../../screens/Register';
import { Image } from 'react-native';
import Text from '../../components/text';
import { useNavigation } from '@react-navigation/native';
import Task from '../../screens/Task';

const Stack = createStackNavigator();

const Routes = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
      // screenListeners={{
      //   state: (nav) => {
      //     console.log('NAVIGATIONNN');
      //     console.log(JSON.stringify(nav, null, 2));
      //     console.log('NAVIGATIONNN');
      //   },
      // }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 50,
                  marginTop: 30,
                  justifyContent: 'center',
                  padding: 10,
                }}
              >
                <Text bold>Timesheet Form</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', top: 47, left: 10 }}
              >
                <Image source={require('../../assets/images/leftimg.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
        name='AddTask'
        component={AddScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <View style={{ backgroundColor: 'transparent' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{ position: 'absolute', top: 47, left: 20 }}
              >
                <Image
                  tintColor='white'
                  source={require('../../assets/images/leftimg.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTransparent: true,
        }}
        name='SignUp'
        component={Register}
      />
      <Stack.Screen name='Main' component={MAIN} />
      <Stack.Screen name='Task' component={Task} />
    </Stack.Navigator>
  );
};

export default Routes;
