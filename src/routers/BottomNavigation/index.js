import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Payment from '../../screens/PaymentScreen';
import OrderScreen from '../../screens/OrderScreen';
import { Context } from '../../globals/variables';
import HomeStack from '../HomeStack';



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
   
   
    <Tab.Screen
            name="Order"
            component={OrderScreen}
            options={{
              tabBarLabel: 'Profile screen',
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="phone-alert" color={color} size={size} />
              ),
            }}
          />

    
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
