import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Card ,H4} from 'nachos-ui'
import axios from 'axios'
import { Context } from '../../GlobalContext/globalContext'
import {WebView } from 'react-native-webview';

const OrderItem = ({item}) => {
    const [listings,setListings] = useState()
    const [realtor,setRealtor] = useState()
    
    

    const globalContext = useContext(Context);
    const {domain, setIsLoggedIn,setGlobalProducts} = globalContext;

    useEffect(() => {
        axios
          .get(`${domain}api/v1/listings/${item.listing}/`)
          .then(response => {
            setListings(response.data.results)
              
          })
    
          .catch(error => console.log(error));
      }, []);



    

const cardStyle = { margin: 15, width: 380, }

  return (
    <View>
  <WebView source={{ uri: 'https://reactnative.dev/' }} />;
        <FlatList
        showsVerticalScrollIndicator={false}
        data={item}

        keyExtractor={(item) => `${item.slug} ${item.id} ${Math.random()} `}
        renderItem={({item}) =>    <Card
        footerContent={
        <View style={styles.cardfooter}>
      
          <View>
            <Text>{item.name}</Text>
            <Text>ETB {item.price}</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.checkoutbtn}>
              <Text>Procced to checkout</Text>
            </TouchableOpacity>
          </View>
        
          </View>}
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fhouse&psig=AOvVaw3MylW3Q0lTqctjOdvrAqpv&ust=1674381832918000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjLx7G02PwCFQAAAAAdAAAAABAE"
        style={cardStyle}
       />}
      />
 
     </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  cardfooter:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  checkoutbtn:{
    width:170,
    height:80,
    marginTop:20,
    backgroundColor:"pink",
    alignContent:"center",
    alignItems:"center"
 
    
  
  }
})