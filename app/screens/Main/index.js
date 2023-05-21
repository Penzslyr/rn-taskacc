import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  WIDHT,
  HEIGHT,
  verticalScale,
  SHADOW,
  Fonts,
} from '../../assets/styles';
import { Profile, MAIN, HOME, AddScreen } from '../../screens/index';
import Homeicon from '../../assets/images/homeicon.svg';
import ProfileIcon from '../../assets/images/profileicon.svg';
import TaskIcon from '../../assets/images/task.svg';
import PerfomIcon from '../../assets/images/perform.svg';
import PlusIcon from '../../assets/images/Combined Shape.svg';
import Performance from '../Performance';
import Task from '../Task';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const FloatingButton = ({ children, onPress }) => {
  const data = useSelector((state) => state.dataTask.dataTask);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddTask')}
      style={{
        top: -50,
        zIndex: 1,
        height: 70,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 80,
          position: 'absolute',
          height: 80,
          borderRadius: 40,
          bottom: -5,
          backgroundColor: '#04325F',
        }}
      ></View>
      <View style={{ width: 70, height: 70 }}>{children}</View>
    </TouchableOpacity>
  );
};

const Main = ({ navigation, routes }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#04325F',
        inactiveTintColor: '#CED1D4',
      }}
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let tabBarIcon = {
            Home: (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Homeicon width={size} height={size} fill={color} />
                <Text
                  style={{
                    marginTop: 5,
                    color: focused ? '#04325F' : '#CED1D4',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  HOME
                </Text>
              </View>
            ),
            Profile: (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <ProfileIcon width={size} height={size} fill={color} />
                <Text
                  style={{
                    marginTop: 5,
                    color: focused ? '#04325F' : '#CED1D4',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  Profile
                </Text>
              </View>
            ),
            Add: <PlusIcon width={size} height={size} fill={'white'} />,
            Task: (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TaskIcon width={size} height={size} fill={color} />
                <Text
                  style={{
                    marginTop: 5,
                    color: focused ? '#04325F' : '#CED1D4',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  Task
                </Text>
              </View>
            ),
            Performance: (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <PerfomIcon width={size} height={size} fill={color} />
                <Text
                  style={{
                    marginTop: 5,
                    color: focused ? '#04325F' : '#CED1D4',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  Performance
                </Text>
              </View>
            ),
          };

          return <View>{tabBarIcon[route.name]}</View>;
        },

        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
      })}
    >
      <Tab.Screen name='Home' component={HOME} />
      <Tab.Screen
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
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    marginLeft: 16,
                    fontSize: 25,
                    fontWeight: 700,
                    fontFamily: Fonts.Nunito.Regular,
                  }}
                >
                  Time Sheet
                </Text>
              </View>
            </View>
          ),
        }}
        name='Task'
        component={Task}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props) => <FloatingButton {...props}></FloatingButton>,
          showLabel: false,
          tabBarStyle: {
            display: 'none',
          },
          unmountOnBlur: true,
        }}
        name='Add'
        component={AddScreen}
      />
      <Tab.Screen name='Performance' component={Performance} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>

    // <Tab.Navigator
    //   tabBarOptions={{
    //     activeTintColor: '#04325F',
    //     style: { height: 120 },
    //   }}
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //   })}
    // >
    //   <Tab.Screen options={{
    //     tabBarIcon: (props) => (
    //         <IconBottom data={props} image={require('../../assets/images/homeiconpng.png')} />
    //       )
    //    }} name='Home' component={HOME} />
    //   <Tab.Screen options={{
    //     tabBarIcon: (props) => (
    //         <IconBottom data={props} image={require('../../assets/images/profileIcon.png')} />
    //       )
    //    }} name='Profile' component={Profile} />
    // </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
