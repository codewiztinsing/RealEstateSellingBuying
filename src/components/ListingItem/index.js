import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



function ListingItem({item}) {
  const navigation = useNavigation();

  return (
  
    <TouchableOpacity
    
      onPress={() => navigation.navigate('Product', {item: item})}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri: item.get_image}} />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>

          <Text style={styles.title}> Property For {item.sale_type}</Text>
          <Text style={styles.home}> Property Type {item.home_type}</Text>
          <Text style={styles.price}> Price {item.price}</Text>
          <Text style={styles.area}> Area {item.sqrt}</Text>
          <Text style={styles.city}> Location {item.city}</Text>
          <Text style={styles.date}> Post Date {item.created_at}</Text>

        
        </View>
        </View>
    </TouchableOpacity>

  );
}
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    borderColor: '#285032',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal:10
  },

  rightContainer: {
    flex: 3,
    backgroundColor: '#fff',
    marginLeft: 4,
  },
  title: {
    fontSize: 18,
  },
  home: {
    fontSize: 16,
  },
  city: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    marginLeft: 4,
  },
  image: {
    flex: 2,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
    height: 140,
    width: 150,
    resizeMode: 'cover',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 2,
  },

})
export default ListingItem;
