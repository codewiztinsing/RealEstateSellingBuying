import React from 'react';
import {View} from 'react-native';
import {
  Button,
  Progress,
  Gravatar,
  H4,
  H5,
  ThemeProvider,
  Indicator,
  Image,
} from 'nachos-ui';
import InputExample from './src/routers/LoginScreen';
import InteriorImages from './src/components/InteriorImages';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from './src/globals/variables';
import Payment from './src/screens/PaymentScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/routers/SignupScreen';
import AuthStack from './src/routers/AuthStack';
import HomeStack from './src/routers/HomeStack';

const App = () => {
  return (
    <ThemeProvider>
      <Provider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};
export default App;
