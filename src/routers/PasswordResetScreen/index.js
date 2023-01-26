import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';
import React, { useContext, useLayoutEffect, useState } from 'react'
import { Context } from '../../globals/variables';
import axios from 'axios';

export default function PasswordReset() {
    const globalContext = useContext(Context);
    const {domain, setIsLoggedIn, setGlobalProducts} = globalContext;
  

  return <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ uri: `${domain}api/v1/accounts/reset_password/` }}
    />
  
}

const styles = StyleSheet.create({
    container:{

    }
})