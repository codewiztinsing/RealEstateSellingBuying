import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { useNavigation, useRoute } from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const orders = route.params;

  return (
 
       <WebView
        originWhitelist={['*']}
        source={{ 
          uri: 'http://10.0.3.2:8000/api/v1/pay/',
          method: 'GET',
          body:`orders=${orders}&dog=pug&fish=shark`
      
      }}
      />
  
  )
}

export default Payment

const styles = StyleSheet.create({})