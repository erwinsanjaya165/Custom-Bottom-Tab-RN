import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Homescreen1, Keranjang, Profile} from '../../screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Warna_Disable, Warna_Utama} from '../../utils';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabs1 extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="home"
        activeColor={Warna_Utama}
        inactiveColor={Warna_Disable}
        shifting={true}>
        <Tab.Screen
          name="home"
          component={Homescreen1}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: 'white',
            tabBarIcon: ({color}) => (
              <Icon name="home" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="keranjang"
          component={Keranjang}
          options={{
            tabBarLabel: 'Cart',
            tabBarColor: 'white',
            tabBarIcon: ({color}) => (
              <Icon name="cart" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: 'Akun',
            tabBarColor: 'white',
            tabBarIcon: ({color}) => (
              <Icon name="account" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
