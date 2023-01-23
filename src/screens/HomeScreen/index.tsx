import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ToastAndroid,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Filters from '../../auth/screens/TopNavigation';

import {Context} from '../../globals/variables';
import SearchBar from '../../components/SeachBar';
import ProductItem from '../../components/ProductItem';
import axios from 'axios';
import FilterButtons from '../../components/FilterButtons';

function HomeScreen() {
  const [__products, setProducts] = useState([]);
  const [refreshing, setOnRefresh] = useState(false);
  const [search, setSearch] = useState(false);
  const [home_type, setHomeType] = useState('');
  const [city, setCity] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const navigation = useNavigation();

  //contexts

  const globalContext = useContext(Context);
  const {domain, setIsLoggedIn, setGlobalProducts} = globalContext;

  useEffect(() => {
    axios
      .post(`${domain}api/v1/listings/search/`, {
        home_type: home_type,
        city: '',
      })
      .then(response => {
        setProducts(response.data);
        setGlobalProducts(response.data);
        setOnRefresh(false);
        setSearch(false);
      })

      .catch(error => console.log(error));
  }, [search, refreshing]);

  return (
    <View style={styles.pages}>
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setClicked={setClicked}
        setSearchPhrase={setSearchPhrase}
        navigation={navigation}
      />
      <FilterButtons
        data={[
          {title: 'All'},
          {title: 'Apartama'},
          {title: 'Condos'},
          {title: 'Town house'},
        ]}
        onValueChange={id => {
          let house_type = 'All';

          if (id == 0) {
            setHomeType('');
            setCity('');
            setSearch(true);
          } else if (id == 1) {
            setHomeType('Apartama');
            setSearch(true);
          } else if (id == 2) {
            setHomeType('Condo');
            setSearch(true);
          } else if (id == 3) {
            setHomeType('Townhouse');
            setSearch(true);
          }
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={__products}
        refreshing={refreshing}
        onRefresh={() => setOnRefresh(true)}
        keyExtractor={item => `${item.slug} ${item.id} ${Math.random()} `}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  pages: {
    width: '100%',
    padding: 10,
  },
  bottomNavigation: {
    width: '100%',
    height: 30,
    marginBottom: 10,
  },
  filterButttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  filterBtn: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
