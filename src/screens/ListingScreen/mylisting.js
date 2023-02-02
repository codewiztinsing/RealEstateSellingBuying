import { FlatList, StyleSheet, Text, View, ViewBase } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { Context } from '../../globals/variables';
import axios from 'axios';
import ListingItem from '../../components/ListingItem';

const Mylisting = () => {


    //contexts
    const globalContext = useContext(Context);
    const {domain, userObj,setIsLoggedIn, setGlobalProducts} = globalContext;
    const [mylistings,setMylistings] = useState([])
    const  [refreshing,setOnRefresh] = useState(false)
  
    useLayoutEffect(() => {
      axios
        .post(`${domain}api/v1/listings/mylistings/`, {
          email:"hello@gmail.com"
        })
        .then(response => {
          setMylistings(response.data);
          setOnRefresh(false);
        
        })
  
        .catch(error => console.log(error));
    }, [refreshing]);
    _renderPlaceholder = i => <View style={styles.item} key={i} />;
    _renderItem = (data, i) => <ListingItem item = {data} style={[{ backgroundColor: data }, styles.item]} key={i} />

    
      
    
  return (
   
   <View>
    <Text style={styles.title}>My listings</Text>
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={mylistings}
      refreshing={refreshing}
      onRefresh={() => setOnRefresh(true)}
      keyExtractor={item => `${item.slug} ${item.id} ${Math.random()} `}
      renderItem={({item}) => <ListingItem item={item} />}
    />
    </View>
  )
}

export default Mylisting

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  }
})