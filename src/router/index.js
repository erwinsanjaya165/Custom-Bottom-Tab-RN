import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Homescreen1, Keranjang, Menu, Profile} from '../screen';
import {BottomTabs1, BottomTabs2, BottomTabs3, BottomTas3} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="menu"
            component={Menu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="homescreen1"
            component={BottomTabs1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="homescreen2"
            component={Bottom2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="homescreen3"
            component={BottomTabs3}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Bottom Tabs 2
const Bottom2 = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabs2 {...props} />}>
      <Tab.Screen
        name="HOME"
        component={Homescreen1}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CART"
        component={Keranjang}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AKUN"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
