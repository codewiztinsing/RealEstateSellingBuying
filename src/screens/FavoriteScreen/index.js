import { View, Text } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem'
import axios from 'axios'
import { Context } from '../../globals/variables'

const Favorite = () => {
  const [products,setProducts] = useState()
  const [refreshing,setOnRefresh] = useState(false)

  //contexts
  const globalContext = useContext(Context);
  const {domain, setIsLoggedIn, setGlobalProducts} = globalContext;

    useLayoutEffect(() => {
        axios
          .get(`${domain}api/v1/listings/`)
          .then(response => {
            setProducts(response.data);
            setOnRefresh(false);
            
            
          })
    
          .catch(error => console.log(error));
      }, [refreshing]);
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={true}
        data={products}
        refreshing={refreshing}
        onRefresh={() => setOnRefresh(true)}
        keyExtractor={item => `${item.slug} ${item.id} ${Math.random()} `}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  )
}

export default Favorite