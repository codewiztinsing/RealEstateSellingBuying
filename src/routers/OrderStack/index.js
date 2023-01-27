import {createStackNavigator} from '@react-navigation/stack';
import OrderScreen from '../../screens/OrderScreen';
import CreateOrderScreen from '../../screens/OrderScreen/createOrder';
import Payment from '../../screens/PaymentScreen';

const Stack = createStackNavigator();

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CreateOrder" component={CreateOrderScreen} />

      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}

export default OrderStack;
