import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {Context} from '../../globals/variables';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const [realtor, setRealtor] = useState({
    name: '',
    photo: '',
    email: '',
    location: '',
    phone: '',
  });

  //contexts
  const globalContext = useContext(Context);
  const {domain, userObj, setuserObj, setIsLoggedIn, setGlobalProducts} =
    globalContext;
  const [load, setLoad] = useState(true);
  const [pic, setPic] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${domain}api/v1/realtors/${userObj.email}/`)
      .then(response => {
        setRealtor(response.data);
        setuserObj(userObj);
        setLoad(false);
      })

      .catch(error => console.log(error));
  }, [userObj.email, load]);

  useLayoutEffect(() => {
    axios
      .get(`${domain}api/v1/orders/`)
      .then(response => {
        console.log('the orders ', response.data);
        setOrders(response.data);
      })

      .catch(error => console.log(error));
  }, [userObj.email, load]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity onPress={() => handleProfileImage()}>
            <Avatar.Image
              source={{
                uri: realtor.photo,
              }}
              size={80}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              {realtor.name}
            </Title>
            <Caption style={styles.caption}>@r_{realtor.name}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          {realtor.top_seller == true ? (
            <Text style={{color: '#777777', marginLeft: 20}}>Top seller</Text>
          ) : (
            <Text style={{color: '#777777', marginLeft: 20}}>seller</Text>
          )}
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            {realtor.phone}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            {realtor.email}
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>ETB 5000</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("OrderStack",{
              screens:"Order"
            })
          }}>
            <Title>{orders.length}</Title>
            <Caption>Orders</Caption>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('FavoriteStack', {
              screen: 'Favorite',
            });
          }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('OrderStack', {
              screen: 'Payment',
            });
          }}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
