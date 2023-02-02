import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Payment from '../../screens/PaymentScreen';
import OrderScreen from '../../screens/OrderScreen';
import {Context} from '../../globals/variables';
import HomeStack from '../HomeStack';
import Profile from '../../screens/ProfileScreen/profile';
import AuthStack from '../AuthStack';
import FavoriteStack from '../FavoriteStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const globalContext = useContext(Context);
  const {isLoggedIn} = globalContext;
  return (
    <Tab.Navigator screenOptions={() => ({tabBarShowLabel: false})}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Profile screen',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
        {


 isLoggedIn ?
      <Tab.Screen
      name="ProfileStack"
      component={Profile}
      options={{
        tabBarLabel: 'Profile stack',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
        ),
      }}
    />:
    <Tab.Screen
      name="AuthStack"
      component={AuthStack}
      options={{
        tabBarLabel: 'Authorization',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />

    
        }


        <Tab.Screen
                name="Favorite Stack"
                component={FavoriteStack}
                options={{
                  tabBarLabel: 'Favorite',
                  headerShown: false,
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="heart"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />

      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'order screen',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="message"
              color={color}
              size={size}
            />
          ),
        }}
      />

      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
