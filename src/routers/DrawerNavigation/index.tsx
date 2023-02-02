import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from '../BottomNavigation';
import DrawerContent from './DrawerContent';
import {Text, View} from 'react-native';
import AuthStack from '../AuthStack';
import HomeStack from '../HomeStack';
import OrderStack from '../OrderStack';
import FavoriteStack from '../FavoriteStack';
import Setting from '../../screens/SettingScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  // drawerPosition:"left"

  return (
    <Drawer.Navigator
      screenOptions={{}}
      drawerContent={prosp => <DrawerContent {...prosp} />}>
      <Drawer.Screen
        options={{
          header: ({navigation}) => {
            <></>;
          },
        }}
        name="BottomTab"
        component={BottomTabNavigator}
      />

      <Drawer.Screen
        options={{
          header: ({navigation}) => {
            <></>;
          },
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Drawer.Screen
        options={
          {
            // headerShown:false
          }
        }
        name="Authorization"
        component={AuthStack}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="OrderStack"
        component={OrderStack}
      />

    <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="FavoriteStack"
        component={FavoriteStack}
      />


<Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Setting"
        component={Setting}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
