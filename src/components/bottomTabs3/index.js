import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Homescreen3, Keranjang, Profile} from '../../screen';
import {Bottom3, CustomBottom} from '../../components';
import {IconAkun, IconBeranda, IconKeranjang} from '../../assets';
import {Warna_Disable, Warna_Utama} from '../../utils';

const Tab = createBottomTabNavigator();

const BottomTabs3 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <Bottom3 {...props} />}>
      <Tab.Screen
        name="home"
        component={Homescreen3}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconBeranda}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'white' : Warna_Disable,
              }}
            />
          ),
          tabBarButton: props => <CustomBottom {...props} />,
        }}
      />
      <Tab.Screen
        name="keranjang"
        component={Keranjang}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconKeranjang}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'white' : Warna_Disable,
              }}
            />
          ),
          tabBarButton: props => <CustomBottom {...props} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconAkun}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'white' : Warna_Disable,
              }}
            />
          ),

          tabBarButton: props => <CustomBottom {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs3;
