import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const Payment = () => {
  return (
 
       <WebView
        originWhitelist={['*']}
        source={{ uri: 'http://10.0.3.2:8000/api/v1/pay/' }}
      />
  
  )
}

export default Payment

const styles = StyleSheet.create({})