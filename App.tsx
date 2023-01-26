import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import InputExample from './src/routers/LoginScreen';
import InteriorImages from './src/components/InteriorImages';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from './src/globals/variables';

import BottomBar from './src/routers/BottomNavigation';
import Listing from './src/screens/ListingScreen';



const App = () => {
  return (
    
      <Provider>
        <NavigationContainer>
          <Listing />
        </NavigationContainer>
      </Provider>
   
  );
};
export default App;
