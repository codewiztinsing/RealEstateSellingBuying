import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../LoginScreen';
import PasswordReset from '../PasswordResetScreen';
import SignupScreen from '../SignupScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
}

export default AuthStack;
