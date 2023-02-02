import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useContext, useEffect, useState} from 'react';
import {
  BetochLogo,
  BetochTitle,
  ButtonText,
  Colors,
  Container,
  ExtraText,
  ExtraView,
  FormAreaView,
  InnerContainer,
  LeftIcon,
  Line,
  MsgBox,
  RightIcon,
  StyledButton,
  StyledInputLabel,
  StyledTextInput,
  SubTitle,
  TextLink,
  TextLinkContent,
} from '../../globals/styles'
import {Formik} from 'formik';
import {ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

//API client
import axios from 'axios';
import { Context } from '../../globals/variables';
import KeyboardAvoidingViewWrapper from '../../globals/styles/KeyboardAvoidingView';
import { orderValidation } from '../../utilities/Validation';

const UpdateOrder = () => {
  // messaging related setters and getters
  const [message, setMessage] = useState();
  const [realtor_id, setRealtorId] = useState();
  const [messageType, setmessageType] = useState();
  const navigation = useNavigation();

  const route = useRoute();
  const {item} = route.params;
  console.log("from order item ",item.phone)

  

    //contexts

    const globalContext = useContext(Context);
    const {domain, orders,setOrders, userObj,setIsLoggedIn,setGlobalProducts} = globalContext;


  const initialValues = {
    name: '',
    address: item.address,
    phone:item.phone
  };

  // order body
  useEffect(() => {
    axios
      .get(`${domain}api/v1/realtors/${userObj.email}/`)
      .then(response => {
       
        setRealtorId(response.data.id)
      })

      .catch(error => console.log(error));
  }, [userObj.email]);


 



  const handleOrder= (props) => {
    const body = {
      email: userObj.email,
      realtor:realtor_id,
      listing:listing.id,
      price:listing.price,
      place:props.address,
      phone:props.phone,
    }

    
    axios
    .post(`${domain}api/v1/orders/`,body)
    .then(response => {
      setOrders(response.data)
      props.phone = ''
      props.address = ''
      props.name = ''
      ToastAndroid.showWithGravity(
        `order updated successfully `,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
     navigation.navigate("Order",
     {
      itemId: listing.id,
      orders: orders
    }
     )
    })

    .catch(error => {
      ToastAndroid.showWithGravity(
        `Already booked listing`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      
     });
  
  };

  

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessage(messageType);
  };

 


  return (
    <KeyboardAvoidingViewWrapper>
      <Container>
        <InnerContainer>
          <SubTitle>Update Order</SubTitle>


          <Formik
            initialValues={initialValues}
            validationSchema={orderValidation}
            onSubmit={(values, formikActions) =>
              handleOrder(values, formikActions)
            }>
            {({
              errors,
              values,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
              handleSubmit,
            }) => (
              <FormAreaView>
             
  

              <Input
                  label="Phone Number"
                  icon="phone"
                  placeholder="Phone Number"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  error={touched.phone && errors.phone}
                  value={values.phone}
                  keyboardType="email-address"
                />
              

                <Input
                  label="Address"
                  icon="address-card"
                  placeholder="Jamo street"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  error={touched.address && errors.address}
                  value={values.address}
                  keyboardType="email-address"
                />

                <MsgBox type={messageType}>{message}</MsgBox>

                <StyledButton onPress={handleSubmit}>
                  <ButtonText>
                   
                Update Order
                
                  </ButtonText>
                </StyledButton>
              </FormAreaView>
            )}
          </Formik>
        </InnerContainer>
      </Container>
    </KeyboardAvoidingViewWrapper>
  );
};

const Input = ({
  error,
  label,
  icon,
 
  ...props
}) => {
  return (
    <ScrollView>
      <LeftIcon>
        <FontAwesome name={icon} size={20} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>

      <StyledTextInput {...props} />

      {error ? <StyledInputLabel error={true}>{error}</StyledInputLabel> : null}

     
    </ScrollView>
  );
};

export default UpdateOrder;
