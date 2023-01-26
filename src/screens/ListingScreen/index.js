import {View, Text} from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import WebView from 'react-native-webview';
import axios from 'axios';
import { Context } from '../../globals/variables';




const Listing = () => {


const [realtor,setRealtor] = useState("Tinsing")
const globalContext = useContext(Context);
const {domain, userObj,setIsLoggedIn, setGlobalProducts} = globalContext;


useLayoutEffect(() => {
  axios
  .get(`${domain}api/v1/realtors/hello@gmail.com/`)
  .then(response => {
    setRealtor(response.data)
  })
  .catch(error => console.log(error));
},[])



  return (
    <WebView

    startInLoadingState={true}
      originWhitelist={['*']}
      
      source={{
        uri: 'http://10.0.3.2:8000/api/v1/listings/user-add/',
        method: 'GET',
        // body:`realtor=${realtor}&dog=pug&fish=shark`

      }}
  

    />
  );
};

export default Listing;
