import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {Card, H4, Carousel} from 'nachos-ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useContext, useEffect, useState} from 'react';
import styles from './styles';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../../globals/variables';
import ImageCarousel from '../../components/ImageCarousel';
import HorizontalFlatList from '../../components/HorizontalFlatList';
import GoogleMap from '../../components/GoogleMap';

const ProductScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;

  // showmore mechanics
  const [showMore, setShowMore] = useState(false);
  const [favButton, setFavButton] = useState(true);
  const [description, setDescription] = useState(item.description);
  const [end, setEnd] = useState(65);

  // related listings
  const [relatedListings, setRelatedListings] = useState([item]);

  //contexts
  const globalContext = useContext(Context);
  const {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    setGlabalRelatedListings,
    setGlobalProducts,
    userObj
  } = globalContext;

  useEffect(() => {
    axios
      .post(`${domain}api/v1/listings/related_search/`, {
        home_type: item.home_type,
        city: item.city,
        price: item.price,
      })
      .then(response => {
        setRelatedListings(response.data);
        setGlabalRelatedListings(response.data);
      })

      .catch(error => console.log(error));
  }, []);

  const showHandler = () => {
    if (showMore) {
      setDescription(description);
      setShowMore(false);
    }
    if (showMore == false) {
      setDescription(description.slice(0, 60));
      setShowMore(true);
    }
  };


  const  handleFavorite = () => {
    axios
    .post(`${domain}api/v1/favs/`, {
      listing:item.id,
      realtor_email: userObj.email  
    
    })
    .then(response => {
      setFavButton(false)
    })

    .catch(error => console.log(error));
  }

console.log(userObj.email)
  return (
    <ScrollView style={styles.root}>
     <View style={styles.topBar}>
        {/* title for house */}
      <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style = {styles.favorite} onPress={() => {
          handleFavorite()
        }}>  
        <Icon name="heart" color = {favButton ? "pink":"white"} size={22} />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.share}>  
        <Icon name="share" size={22}  />
        </TouchableOpacity>
      
     </View>
      {/* image carousel to show list of house images */}
      <ImageCarousel images={item.images} />

      <View style={styles.info}>
        <View style={styles.left}>
          <Text style={styles.price}>${item.price}million</Text>
          <Text style={styles.bottomText}>
            {item.sale_type == 'For Sale' ? 'Selling House' : 'Rent House'}{' '}
          </Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.bottomText}> Bed rooms: {item.bed_rooms}</Text>
          <Text style={styles.bottomText}> Bath rooms :{item.bath_rooms} </Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>

        <Pressable
          style={{
            backgroundColor: 'skyblue',
            borderRadius: 5,
            width: 75,
            height: 20,
          }}
          onPress={() => {
            showHandler();
          }}>
          <Text>{showMore ? 'show less' : 'show more'}</Text>
        </Pressable>
      </View>
      {/* <Text>Show related house </Text> */}

      <View>
        <TouchableOpacity
          style={styles.showrelatedbtn}
          onPress={() => {
            navigation.navigate('RelatedProduct', {
              relatedListings: relatedListings,
            });
          }}>
          <Text>Show related products</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topBar}>
        {isLoggedIn == true ? (
          <TouchableOpacity
            style={styles.orderButton}
            onPress={() => {
              navigation.navigate('OrderStack', {
                screen: 'CreateOrder',
                params: {listing: item},
              });
            }}>
            <Text style={styles.orderText}>Order Now</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.orderButton}
            onPress={() => {
              navigation.navigate('Authorization', {
                screen: 'Login',
                params: {listing: item},
              });
            }}>
            <Text style={styles.orderText}>Login to order</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
