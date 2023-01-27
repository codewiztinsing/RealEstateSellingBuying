import * as React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Context} from '../../globals/variables';
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

function OrderCard({item}) {
   const navigation =  useNavigation()
  const LeftContent = props => <Avatar.Icon {...props} icon="home" />;
  return (
    <View>
      <Card>
        <Card.Title
          variant="bodyLarge"
          title={item.name}
          subtitle={item.phone}
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="bodyMedium">
            {`you sure to procced with this listing with  price ${item.price} 
           and created at ${item.created_at}.and you address is ${item.address}
           `}
          </Text>
        </Card.Content>
        {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
        <Card.Actions>
          <Button
          onPress={() => {
            console.log('cancel button is pressed')
        }}
          >Cancel</Button>


          <Button onPress={() => {
           navigation.navigate("Payment")
          }}>Pay with yenepay</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const OrderScreen = () => {
  //contexts
  const globalContext = React.useContext(Context);
  const {domain, setIsLoggedIn, setGlobalProducts} = globalContext;
  const [refreshing, setOnRefresh] = React.useState(false);
  const [orders, setOrders] = React.useState(false);

  React.useLayoutEffect(() => {
    axios
      .get(`${domain}api/v1/orders/`)
      .then(response => {
        setOrders(response.data);
        setOnRefresh(false);
      })

      .catch(error => console.log(error));
  }, [refreshing]);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orders}
        refreshing={refreshing}
        onRefresh={() => setOnRefresh(true)}
        keyExtractor={item => `${item.slug} ${item.id} ${Math.random()} `}
        renderItem={({item}) => <OrderCard item={item} />}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
