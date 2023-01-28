import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import Listing from '../../screens/ListingScreen';
import ProductScreen from '../../screens/ProductScreen';
import RelatedProductScreen from '../../screens/RelatedProductScreen';


const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="RelatedProduct" component={RelatedProductScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;